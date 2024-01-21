import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import StepFourPage from './StepFourPage';
import { useGoalContext } from '../../components/ContextProvider/ContextProvider';

jest.mock('../../components/ContextProvider/ContextProvider', () => ({
  ...jest.requireActual('../../components/ContextProvider/ContextProvider'),
  useGoalContext: jest.fn(),
}));

describe('StepFourPage', () => {
  it('renders correctly and handles option clicks', () => {
    const mockActivityId = 2;
    const mockSetActivityId = jest.fn();
    useGoalContext.mockReturnValue({
      activityId: mockActivityId,
      setActivityId: mockSetActivityId,
    });

    const { getByText, getByAltText } = render(
      <Router>
        <StepFourPage />
      </Router>,
    );

    expect(getByText('How active are you during the day?')).toBeInTheDocument();
    expect(getByText('Physical exercise means a lot for a woman who wants to lose kilos and works at the office')).toBeInTheDocument();
    expect(getByAltText('active-girl')).toBeInTheDocument();

    fireEvent.click(getByText('Hardly at all'));
    expect(mockSetActivityId).toHaveBeenCalledWith(1);
  });
});
