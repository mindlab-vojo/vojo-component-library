import React from 'react';
import { render } from '@testing-library/react';
import Sample from './';

test('renders learn react link', () => {
  const component = render(<Sample />);
  expect(component).toMatchSnapshot()
});
