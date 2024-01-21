import { useGoalContext } from '../../components/ContextProvider/ContextProvider';
import StepFourOption from '../../components/StepFourOption';
import StepLayout from '../../components/common/StepLayout';
import activeGirl from '../../assets/images/active-girl.png';
import './styles.scss';

const activityList = [
  {
    id: 1,
    text: 'Hardly at all',
  },
  {
    id: 2,
    text: 'Fitness 1-2 times a week',
  },
  {
    id: 3,
    text: 'Fitness 3-5 times a week',
  },
  {
    id: 4,
    text: 'Fitness 5-7 times a week',
  },
];

function StepFourPage() {
  const { activityId, setActivityId } = useGoalContext();

  return (
    <StepLayout
      title="Physical exercise"
      description="Physical exercise means a lot for a woman who wants to lose kilos and works at the office"
    >
      <div className="step-four-wrapper">
        <h3 className="step-four-wrapper-title">How active are you during the day?</h3>
        <div className="step-four-wrapper-content">
          <img src={activeGirl} alt="active-girl" className="step-four-wrapper-content-img" />
          <ul className="step-four-wrapper-content-options-list">
            {activityList.map(({ id, text }) => (
              <li className="step-four-wrapper-content-options-list-item" key={id}>
                <StepFourOption id={id} activityId={activityId} text={text} setActivityId={setActivityId} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </StepLayout>
  );
}

export default StepFourPage;
