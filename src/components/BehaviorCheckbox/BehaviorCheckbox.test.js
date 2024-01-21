import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom/extend-expect';

import BehaviorCheckbox from './BehaviorCheckbox';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders BehaviorCheckbox component', async () => {
  const toggleBehaviorMock = jest.fn();
  const isBehaviorActiveMock = jest.fn().mockReturnValue(true);

  act(() => {
    render(
      <BehaviorCheckbox
        id={1}
        name="testName"
        text="Test Text"
        image="test.jpg"
        toggleBehavior={toggleBehaviorMock}
        isBehaviorActive={isBehaviorActiveMock}
      />,
      container,
    );
  });

  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);

  expect(toggleBehaviorMock).toHaveBeenCalledWith(1);
  expect(isBehaviorActiveMock).toHaveBeenCalledWith(1);

  fireEvent.change(checkbox, { target: { value: 2 } });
  await waitFor(() => expect(checkbox.value).toBe('2'));

  const label = screen.getByLabelText('Test Text');
  expect(label).toBeInTheDocument();

  const image = screen.getByAltText('testName');
  expect(image).toHaveAttribute('src', 'test.jpg');

  const textElement = screen.getByText('Test Text');
  expect(textElement).toBeInTheDocument();
});
