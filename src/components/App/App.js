import { BrowserRouter as Router } from 'react-router-dom';

import AppContent from '../AppContent/AppContent';
import './normalize.css';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
