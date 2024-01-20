import {
  createContext, useContext, useMemo, useState,
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

  const chooseGoal = (id, path) => {
    setGoal(id);
    navigate(path);
  };

  const contextValue = useMemo(() => ({ goalId, chooseGoal }), [goalId, chooseGoal]);

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
