import PropTypes from 'prop-types';

import { STEP_TWO } from '../../constants/routes';
import './styles.scss';

function StepOneButton({
  selectedId, id, text, image, chooseGoal,
}) {
  return (
    <button
      className={`step-one-button ${selectedId === id ? 'active' : ''}`}
      onClick={() => chooseGoal(id, STEP_TWO)}
    >
      <span className="step-one-button-text">{text}</span>
      <img src={image} alt={text} className="step-one-button-img" />
    </button>
  );
}

StepOneButton.propTypes = {
  selectedId: PropTypes.number,
  id: PropTypes.number,
  text: PropTypes.string,
  image: PropTypes.string,
  chooseGoal: PropTypes.func,
};

StepOneButton.defaultProps = {
  selectedId: null,
  id: null,
  text: '',
  image: '',
  chooseGoal: () => {},
};
export default StepOneButton;
