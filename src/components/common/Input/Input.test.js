import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Formik } from 'formik';

import Input from './Input';

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

it('Test Input component', async () => {
  const initialValues = {
    testName: '',
  };

  act(() => {
    render(<Formik initialValues={initialValues}><Input type="text" name="testName" placeholderText="testPlaceholder" /></Formik>, container);
  });

  const input = screen.getByPlaceholderText('testPlaceholder');
  fireEvent.change(input, { target: { value: 'test' } });
  await waitFor(() => expect(input.value).toBe('test'));
});
