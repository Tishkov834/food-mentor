import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import StepTwoPage from './StepTwoPage';
import { useGoalContext } from '../../components/ContextProvider/ContextProvider';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

jest.mock('../../components/ContextProvider/ContextProvider', () => ({
  ...jest.requireActual('../../components/ContextProvider/ContextProvider'),
  useGoalContext: jest.fn(),
}));

describe('StepTwoPage', () => {
  it('renders correctly, switches system, and submits form', async () => {
    const mockNavigate = jest.fn();
    const mockSystem = 'imperial';
    const mockSetSystem = jest.fn();
    const mockWeight = 150;
    const mockSetWeight = jest.fn();
    const mockHeight = 65;
    const mockSetHeight = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);
    useGoalContext.mockReturnValue({
      system: mockSystem,
      setSystem: mockSetSystem,
      weight: mockWeight,
      setWeight: mockSetWeight,
      height: mockHeight,
      setHeight: mockSetHeight,
    });

    const { getByText, getByLabelText, getByPlaceholderText } = render(
      <Router>
        <StepTwoPage />
      </Router>,
    );

    expect(getByText('Measure Yourself')).toBeInTheDocument();
    expect(getByText('What are your height and body weight?')).toBeInTheDocument();

    expect(getByText('Switch to Metric')).toBeInTheDocument();

    fireEvent.click(getByText('Switch to Metric'));

    expect(mockSetSystem).toHaveBeenCalled();

    expect(getByLabelText(/Height/)).toBeInTheDocument();
    expect(getByLabelText(/Current Weight/)).toBeInTheDocument();

    fireEvent.change(getByPlaceholderText('Height(sm)'), { target: { value: '70' } });
    fireEvent.change(getByPlaceholderText('Current Weight(kg)'), { target: { value: '75' } });

    expect(getByPlaceholderText('Height(sm)').value).toBe('70');
    expect(getByPlaceholderText('Current Weight(kg)').value).toBe('75');

    fireEvent.click(getByText('Next'));

    await waitFor(() => {
      expect(mockSetHeight).toHaveBeenCalledWith('70');
      expect(mockSetWeight).toHaveBeenCalledWith('75');
      expect(mockNavigate).toHaveBeenCalledWith('/step-three');
    });
  });
});
