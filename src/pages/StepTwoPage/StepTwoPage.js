import { useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';

import { useGoalContext } from '../../components/ContextProvider/ContextProvider';
import SwitchSystem from '../../components/SwitchSystem';
import Input from '../../components/common/Input';
import StepLayout from '../../components/common/StepLayout';
import Button from '../../components/common/Button';
import { STEP_THREE } from '../../constants/routes';
import { paramsSchema } from '../../constants/paramsSchema';
import './styles.scss';

function StepTwoPage() {
  const {
    system, setSystem, weight, setWeight, height, setHeight,
  } = useGoalContext();

  const navigate = useNavigate();

  const initialValues = {
    weight: weight || '',
    height: height || '',
  };

  const changeSystem = () => {
    setSystem((prevSystem) => (prevSystem === 'imperial' ? 'metric' : 'imperial'));
  };

  const setParams = (formValues) => {
    setHeight(formValues.height);
    setWeight(formValues.weight);
    navigate(STEP_THREE);
  };

  return (
    <StepLayout
      title="Measure Yourself"
      description="What are your height and body weight?"
    >
      <>
        <SwitchSystem system={system} changeSystem={changeSystem} />
        <Formik onSubmit={setParams} initialValues={initialValues} validationSchema={paramsSchema}>
          {({ isValid }) => (
            <Form className="params-form-content">
              <div className="params-form-content-inputs">
                <Input type="number" name="height" placeholderText={`Height(${system === 'imperial' ? 'ft' : 'sm'})`} />
                <Input type="number" name="weight" placeholderText={`Current Weight(${system === 'imperial' ? 'ft' : 'kg'})`} />
              </div>
              <Button type="submit" isDisabled={!isValid} />
            </Form>
          )}
        </Formik>
      </>
    </StepLayout>
  );
}

export default StepTwoPage;
