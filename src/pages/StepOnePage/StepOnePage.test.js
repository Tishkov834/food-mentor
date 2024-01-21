import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import { useGoalContext } from '../../components/ContextProvider/ContextProvider';
import StepOnePage from './StepOnePage';

jest.mock('../../components/ContextProvider/ContextProvider');

describe('StepOnePage', () => {
  it('renders correctly and handles button clicks', () => {
    const mockChooseGoal = jest.fn();
    const mockGoalId = 1;
    useGoalContext.mockReturnValue({
      goalId: mockGoalId,
      chooseGoal: mockChooseGoal,
    });

    const { findByText, findByAltText } = render(
      <Router>
        <StepOnePage />
      </Router>,
    );

    expect(findByText('What are your goals?')).resolves.toBeInTheDocument();
    expect(findByText('The Goal')).resolves.toBeInTheDocument();
    expect(findByText('Focus on the health benefits you need. Balanced nutrition will let you achieve them')).resolves.toBeInTheDocument();

    const loseWeightButton = findByAltText('Lose Weight');
    const gainMuscleButton = findByAltText('Gain Muscle');
    const healthyHabitsButton1 = findByAltText('Develop healthy habits');
    const healthyHabitsButton2 = findByAltText('Develop healthy habits');

    expect(loseWeightButton).resolves.toBeInTheDocument();
    expect(gainMuscleButton).resolves.toBeInTheDocument();
    expect(healthyHabitsButton1).resolves.toBeInTheDocument();
    expect(healthyHabitsButton2).resolves.toBeInTheDocument();

    expect(loseWeightButton.parentElement).resolves.toHaveClass('active');
    expect(gainMuscleButton.parentElement).resolves.not.toHaveClass('active');
    expect(healthyHabitsButton1.parentElement).resolves.not.toHaveClass('active');
    expect(healthyHabitsButton2.parentElement).resolves.not.toHaveClass('active');

    fireEvent.click(gainMuscleButton);
    fireEvent.click(healthyHabitsButton1);
    fireEvent.click(healthyHabitsButton2);

    expect(mockChooseGoal).toHaveBeenCalledWith(2, '/next-path-for-gain-muscle');
    expect(mockChooseGoal).toHaveBeenCalledWith(3, '/next-path-for-healthy-habits');
    expect(mockChooseGoal).toHaveBeenCalledWith(4, '/next-path-for-healthy-habits-second');
  });
});
