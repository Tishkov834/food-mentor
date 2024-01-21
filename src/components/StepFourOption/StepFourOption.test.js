import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import StepFourOption from './StepFourOption';

describe('StepFourOption', () => {
  it('renders correctly', () => {
    const props = {
      id: 1,
      activityId: 1,
      text: 'Test Text',
      setActivityId: jest.fn(),
    };

    const { getByText, getByLabelText } = render(<StepFourOption {...props} />);

    expect(getByText('Test Text')).toBeInTheDocument();

    expect(getByLabelText('Test Text')).toHaveAttribute('id', '1');
    const option = screen.getByText('Test Text');
    userEvent.click(option);
  });

  it('calls setActivityId function on input click', () => {
    const props = {
      id: 1,
      activityId: 1,
      text: 'Test Text',
      setActivityId: jest.fn(),
    };

    const { getByLabelText } = render(<StepFourOption {...props} />);

    fireEvent.click(getByLabelText('Test Text'));

    expect(props.setActivityId).toHaveBeenCalledWith(1);
  });
});
