import { BrowserRouter as Router } from 'react-router-dom';

import AppContent from '../AppContent';
import ContextProvider from '../ContextProvider';
import './normalize.css';
import './styles.scss';

function App() {
  return (
    <Router>
      <ContextProvider>
        <AppContent />
      </ContextProvider>
    </Router>
  );
}

export default App;
