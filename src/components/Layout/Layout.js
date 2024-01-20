import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import avocado from '../../assets/icons/avocado.svg';
import prev from '../../assets/icons/prev.svg';
import './styles.scss';

function Layout({ children }) {
  const navigate = useNavigate();

  const goToPreviousStep = () => {
    navigate(-1);
  };

  return (
    <div className="layout-wrapper">
      <header className="layout-wrapper-header">
        <div className="layout-wrapper-header-content">
          <button onClick={goToPreviousStep} className="layout-wrapper-header-content-btn">
            <img src={prev} alt="prev" className="layout-wrapper-header-content-btn-icon" />
          </button>
          <div className="layout-wrapper-header-content-title">
            <img src={avocado} alt="avocado" className="layout-wrapper-header-content-title-img" />
            <span className="layout-wrapper-header-content-title-text">Food Mentor</span>
          </div>
        </div>
      </header>
      <main className="layout-wrapper-content">
        {children}
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
