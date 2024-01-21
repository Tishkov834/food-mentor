import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import StepLayout from './StepLayout';

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

it('Test title and description in StepLayout component', () => {
  const titleText = 'TitleTest';
  const descriptionText = 'TitleTest';

  act(() => {
    render(<StepLayout title={titleText} description={descriptionText} />, container);
  });
  const titleLayout = screen.getByTestId('step-layout-title');
  const descriptionLayout = screen.getByTestId('step-layout-description');

  expect(titleLayout.textContent).toBe(titleText);
  expect(descriptionLayout.textContent).toBe(descriptionText);
});
