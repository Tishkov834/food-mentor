import PropTypes from 'prop-types';

import './styles.scss';

function Button({ title, type, onClick }) {
  return (
    <button className="button" type={type} onClick={onClick}>
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  title: 'Continue',
  type: 'button',
  onClick: () => {},
};
export default Button;
