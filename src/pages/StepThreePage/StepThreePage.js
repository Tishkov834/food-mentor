import { useNavigate } from 'react-router-dom';

import { useGoalContext } from '../../components/ContextProvider/ContextProvider';
import BehaviorCheckbox from '../../components/BehaviorCheckbox';
import StepLayout from '../../components/common/StepLayout';
import Button from '../../components/common/Button';
import { STEP_FOUR } from '../../constants/routes';
import moon from '../../assets/icons/moon.svg';
import donut from '../../assets/icons/donut.svg';
import soda from '../../assets/icons/soda.svg';
import salt from '../../assets/icons/salt.svg';
import pizza from '../../assets/icons/pizza.svg';
import cross from '../../assets/icons/cross.svg';
import './styles.scss';

const behaviorList = [
  {
    id: 1,
    name: 'rest',
    text: 'I don`t rest enough',
    image: moon,
  },
  {
    id: 2,
    name: 'donut',
    text: 'I have a sweet tooth',
    image: donut,
  },
  {
    id: 3,
    name: 'soda',
    text: 'I have too much soda',
    image: soda,
  },
  {
    id: 4,
    name: 'salt',
    text: 'I eat many salty foods',
    image: salt,
  },
  {
    id: 5,
    name: 'pizza',
    text: 'I enjoy midnight snacks',
    image: pizza,
  },
  {
    id: 6,
    name: 'cross',
    text: 'None of the above',
    image: cross,
  },
];

function StepThreePage() {
  const navigate = useNavigate();

  const { selectedBehaviors, setSelectedBehaviors } = useGoalContext();

  const toggleBehavior = (behaviorId) => {
    setSelectedBehaviors((prevBehaviors) => {
      if (prevBehaviors.includes(behaviorId)) {
        return prevBehaviors.filter((id) => id !== behaviorId);
      }
      return [...prevBehaviors, behaviorId];
    });
  };

  const goToNext = () => {
    navigate(STEP_FOUR);
  };

  const isBehaviorActive = (behaviorId) => selectedBehaviors.includes(behaviorId);

  return (
    <StepLayout
      title="Destructive behaviors"
      description="We all have them! Which are yours?"
    >
      <div className="step-three-wrapper">
        <ul className="behaviors-list">
          {behaviorList.map(({
            id, name, text, image,
          }) => (
            <li className="behaviors-list-item" key={id}>
              <BehaviorCheckbox id={id} name={name} text={text} image={image} toggleBehavior={toggleBehavior} isBehaviorActive={isBehaviorActive} />
            </li>
          ))}
        </ul>
        <Button onClick={goToNext} isDisabled={!selectedBehaviors.length} />
      </div>
    </StepLayout>
  );
}

export default StepThreePage;
