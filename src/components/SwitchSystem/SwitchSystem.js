import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

function SwitchSystem({ system, changeSystem }) {
  return (
    <div className="switch-system-wrapper">
      <button
        onClick={changeSystem}
        className={`switch-system-wrapper-item ${system === 'imperial' ? 'active' : ''}`}
      >
        <span className="switch-system-wrapper-item-text">Imperial</span>
      </button>
      <button
        onClick={changeSystem}
        className={`switch-system-wrapper-item ${system === 'metric' ? 'active' : ''}`}
      >
        <span className="switch-system-wrapper-item-text">Metric</span>
      </button>
    </div>
  );
}

SwitchSystem.propTypes = {
  system: PropTypes.string,
  changeSystem: PropTypes.func,
};

SwitchSystem.defaultProps = {
  system: '',
  changeSystem: () => {},
};

export default SwitchSystem;
