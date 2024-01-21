import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

function BehaviorCheckbox({
  id, name, image, text, toggleBehavior, isBehaviorActive,
}) {
  return (
    <>
      <input
        type="checkbox"
        id={id}
        className="behavior-checkbox-input"
        name={name}
        onChange={() => toggleBehavior(id)}
      />
      <label htmlFor={id} className={`behavior-checkbox-content ${isBehaviorActive(id) ? 'active' : ''}`}>
        <img className="behavior-checkbox-content-img" src={image} alt={name} />
        <p className="behavior-checkbox-content-text">{text}</p>
      </label>
    </>
  );
}

BehaviorCheckbox.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
  toggleBehavior: PropTypes.func,
  isBehaviorActive: PropTypes.func,
};

BehaviorCheckbox.defaultProps = {
  id: null,
  name: '',
  text: '',
  image: '',
  toggleBehavior: () => {},
  isBehaviorActive: () => {},
};

export default BehaviorCheckbox;
