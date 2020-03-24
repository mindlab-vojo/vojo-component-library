import React from 'react';
import { render } from '@testing-library/react';

import Typography from './';

test('Test Typography with h1 component render', () => {
  const component = render(
    <Typography tag="h1"
      color="#F00"
      type="default">
      Hello Vojo
    </Typography>
  );
  expect(component).toMatchSnapshot()
});
test('Test Typography with p component render', () => {
  const component = render(
    <Typography tag="p"
      color="#FF0"
      type="default">
      Hello Vojo
    </Typography>
  );
  expect(component).toMatchSnapshot()
});