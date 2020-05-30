import * as React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

test('renders learn react link', () => {
  const { getByText } = render(<Home />);
  const headerText = getByText(/puzzle pages/i);
  expect(headerText).toBeInTheDocument();
});
