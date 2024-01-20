import PropTypes from 'prop-types';

import './styles.scss';

function Button({
  title, type, onClick, isDisabled,
}) {
  return (
    <button className="button" type={type} onClick={onClick} disabled={isDisabled}>
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  title: 'Continue',
  type: 'button',
  isDisabled: false,
  onClick: () => {},
};
export default Button;
