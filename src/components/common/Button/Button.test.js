import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';

import Button from './Button';

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

describe('Test Button component', () => {
  it('Test disabled in Button component', () => {
    act(() => {
      render(<Button isDisabled />, container);
    });

    const button = screen.getByRole('button');
    expect(container.textContent).toBe('Continue');
    expect(button).toHaveProperty('disabled', true);
  });

  it('Test not disabled in Button component', () => {
    act(() => {
      render(<Button />, container);
    });

    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(button).toHaveProperty('disabled', false);
  });
});
