import {
  Navigate, Route, Routes, useNavigate,
} from 'react-router-dom';

import StepOnePage from '../../pages/StepOnePage';
import StepTwoPage from '../../pages/StepTwoPage';
import StepThreePage from '../../pages/StepThreePage';
import StepFourPage from '../../pages/StepFourPage';

function AppContent() {
  const navigate = useNavigate();

  const goToPreviousStep = () => {
    navigate(-1);
  };

  return (
    <>
      <button onClick={goToPreviousStep}>prev</button>
      <Routes>
        <Route exact path="/" element={<Navigate to="/step-one" />} />
        <Route path="/step-one" element={<StepOnePage />} />
        <Route path="/step-two" element={<StepTwoPage />} />
        <Route path="/step-three" element={<StepThreePage />} />
        <Route path="/step-four" element={<StepFourPage />} />
      </Routes>
    </>
  );
}

export default AppContent;
