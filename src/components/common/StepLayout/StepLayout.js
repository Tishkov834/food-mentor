import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

function StepLayout({ children, title, description }) {
  return (
    <div className="step-layout-wrapper">
      <div className="step-layout-wrapper-header">
        <h1 className="step-layout-wrapper-header-title" data-testid="step-layout-title">{title}</h1>
        <span className="step-layout-wrapper-header-text" data-testid="step-layout-description">{description}</span>
      </div>
      <div className="step-layout-wrapper">
        {children}
      </div>
    </div>
  );
}

StepLayout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.element,
};

StepLayout.defaultProps = {
  title: '',
  description: '',
  children: null,
};

export default StepLayout;
