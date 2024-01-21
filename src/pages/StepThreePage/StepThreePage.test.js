import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';

import StepThreePage from './StepThreePage';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

jest.mock('../../components/ContextProvider/ContextProvider', () => ({
  ...jest.requireActual('../../components/ContextProvider/ContextProvider'),
  useGoalContext: jest.fn(),
}));

describe('StepThreePage', () => {
  it('renders correctly and handles behavior toggles and button click', () => {
    const mockNavigate = jest.fn();
    const mockSelectedBehaviors = [2, 4];
    const mockSetSelectedBehaviors = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);
    useGoalContext.mockReturnValue({
      selectedBehaviors: mockSelectedBehaviors,
      setSelectedBehaviors: mockSetSelectedBehaviors,
    });

    const { getByText, getByAltText } = render(
      <Router>
        <StepThreePage />
      </Router>,
    );

    expect(getByText('Destructive behaviors')).toBeInTheDocument();
    expect(getByText('We all have them! Which are yours?')).toBeInTheDocument();

    expect(getByAltText('moon')).toBeInTheDocument();
    expect(getByAltText('donut')).toBeInTheDocument();
    expect(getByAltText('soda')).toBeInTheDocument();
    expect(getByAltText('salt')).toBeInTheDocument();
    expect(getByAltText('pizza')).toBeInTheDocument();
    expect(getByAltText('cross')).toBeInTheDocument();

    expect(getByAltText('donut').parentElement).toHaveClass('active');
    expect(getByAltText('salt').parentElement).toHaveClass('active');

    fireEvent.click(getByText('I have a sweet tooth'));
    expect(mockSetSelectedBehaviors).toHaveBeenCalledWith([4]);
    expect(getByAltText('donut').parentElement).not.toHaveClass('active');
    expect(getByText('Next')).not.toBeDisabled();

    fireEvent.click(getByText('Next'));
    expect(mockNavigate).toHaveBeenCalledWith('/step-four');
  });
});
