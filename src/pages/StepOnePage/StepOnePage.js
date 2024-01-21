import { useGoalContext } from '../../components/ContextProvider/ContextProvider';
import StepLayout from '../../components/common/StepLayout';
import StepOneButton from '../../components/StepOneButton';
import loseWeight from '../../assets/icons/lose-weight.svg';
import gainMuscle from '../../assets/icons/gain-muscle.svg';
import developHealthyHabits from '../../assets/icons/develop-healthy-habits.svg';
import developHealthyHabitsSecond from '../../assets/icons/develop-healthy-habits-second.svg';
import './styles.scss';

const goalsList = [
  { id: 1, text: 'Lose Weight', image: loseWeight },
  { id: 2, text: 'Gain Muscle', image: gainMuscle },
  { id: 3, text: 'Develop healthy habits', image: developHealthyHabits },
  { id: 4, text: 'Develop healthy habits', image: developHealthyHabitsSecond },
];

function StepOnePage() {
  const { goalId, chooseGoal } = useGoalContext();

  return (
    <StepLayout
      title="The Goal"
      description="Focus on the health benefits you need. Balanced nutrition will let you achieve them"
    >
      <>
        <h2 className="step-one-title">What are your goals?</h2>
        <ul className="step-one-list">
          {goalsList.map(({ id, text, image }) => (
            <li className="step-one-list-item" key={id}>
              <StepOneButton selectedId={goalId} id={id} image={image} text={text} chooseGoal={chooseGoal} />
            </li>
          ))}
        </ul>
      </>
    </StepLayout>
  );
}

export default StepOnePage;
