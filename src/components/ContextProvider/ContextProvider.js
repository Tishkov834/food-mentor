import {
  createContext, useCallback, useContext, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const GoalContext = createContext();

export const useGoalContext = () => {
  const context = useContext(GoalContext);
  if (!context) {
    throw new Error('useGoalContext must be used within a GoalProvider');
  }
  return context;
};

function ContextProvider({ children }) {
  const navigate = useNavigate();

  const [goalId, setGoal] = useState(null);

  const [system, setSystem] = useState('imperial');

  const [weight, setWeight] = useState(0);

  const [height, setHeight] = useState(0);

  const [selectedBehaviors, setSelectedBehaviors] = useState([]);

  const chooseGoal = useCallback((id, path) => {
    setGoal(id);
    navigate(path);
  }, [navigate, setGoal]);

  const contextValue = useMemo(() => ({
    goalId, system, weight, height, selectedBehaviors, setSelectedBehaviors, setHeight, setWeight, setSystem, chooseGoal,
  }), [goalId, system, weight, height, selectedBehaviors, setSelectedBehaviors, setHeight, setWeight, setSystem, chooseGoal]);

  return (
    <GoalContext.Provider value={contextValue}>
      {children}
    </GoalContext.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.element,
};

ContextProvider.defaultProps = {
  children: null,
};

export default ContextProvider;
