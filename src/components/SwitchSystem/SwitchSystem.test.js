import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SwitchSystem from './SwitchSystem';

describe('SwitchSystem', () => {
  it('renders correctly with Imperial system', () => {
    const props = {
      system: 'imperial',
      changeSystem: jest.fn(),
    };

    const { getByText } = render(<SwitchSystem {...props} />);

    expect(getByText('Imperial').parentElement).toHaveClass('active');
    expect(getByText('Metric').parentElement).not.toHaveClass('active');
  });

  it('renders correctly with Metric system', () => {
    const props = {
      system: 'metric',
      changeSystem: jest.fn(),
    };

    const { getByText } = render(<SwitchSystem {...props} />);

    expect(getByText('Metric').parentElement).toHaveClass('active');
    expect(getByText('Imperial').parentElement).not.toHaveClass('active');
  });
});
