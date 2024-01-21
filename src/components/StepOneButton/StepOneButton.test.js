import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import StepOneButton from './StepOneButton';

describe('StepOneButton', () => {
  it('renders correctly', () => {
    const props = {
      selectedId: 1,
      id: 1,
      text: 'Test Text',
      image: 'test-image.jpg',
      chooseGoal: jest.fn(),
    };

    const { getByText, getByAltText } = render(<StepOneButton {...props} />);

    expect(getByText('Test Text')).toBeInTheDocument();

    expect(getByAltText('Test Text')).toHaveAttribute('src', 'test-image.jpg');

    expect(getByText('Test Text').parentElement).toHaveClass('active');
  });

  it('calls chooseGoal function on button click', () => {
    const props = {
      selectedId: 1,
      id: 1,
      text: 'Test Text',
      image: 'test-image.jpg',
      chooseGoal: jest.fn(),
    };

    const { getByText } = render(<StepOneButton {...props} />);

    fireEvent.click(getByText('Test Text'));

    expect(props.chooseGoal).toHaveBeenCalledWith(1, '/step-two');
  });

  it('renders correctly when not selected', () => {
    const props = {
      selectedId: 2, // different id
      id: 1,
      text: 'Test Text',
      image: 'test-image.jpg',
      chooseGoal: jest.fn(),
    };

    const { getByText } = render(<StepOneButton {...props} />);

    expect(getByText('Test Text').parentElement).not.toHaveClass('active');
  });
});
