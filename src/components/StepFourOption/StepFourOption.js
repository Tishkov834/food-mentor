import PropTypes from 'prop-types';

import './styles.scss';

function StepFourOption({
  id, activityId, text, setActivityId,
}) {
  return (
    <>
      <input
        type="radio"
        id={id}
        className="option-input"
        onClick={() => setActivityId(id)}
      />
      <label
        htmlFor={id}
        className={`option-content ${activityId === id ? 'active' : ''}`}
      >
        <p className="option-content-text">
          {text}
        </p>
      </label>
    </>
  );
}

StepFourOption.propTypes = {
  id: PropTypes.number,
  activityId: PropTypes.number,
  text: PropTypes.string,
  setActivityId: PropTypes.func,

};

StepFourOption.defaultProps = {
  id: null,
  activityId: null,
  text: '',
  setActivityId: () => {},
};

export default StepFourOption;
