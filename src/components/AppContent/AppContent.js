import {
  Navigate, Route, Routes,
} from 'react-router-dom';

import StepOnePage from '../../pages/StepOnePage';
import StepTwoPage from '../../pages/StepTwoPage';
import StepThreePage from '../../pages/StepThreePage';
import StepFourPage from '../../pages/StepFourPage';
import Layout from '../Layout';
import {
  STEP_ONE, STEP_THREE, STEP_TWO, STEP_FOUR,
} from '../../constants/routes';

function AppContent() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Navigate to={STEP_ONE} />} />
        <Route path={STEP_ONE} element={<StepOnePage />} />
        <Route path={STEP_TWO} element={<StepTwoPage />} />
        <Route path={STEP_THREE} element={<StepThreePage />} />
        <Route path={STEP_FOUR} element={<StepFourPage />} />
      </Routes>
    </Layout>
  );
}

export default AppContent;
