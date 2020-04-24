import React from 'react';
import { render } from '@testing-library/react';
import Logo from './';

test('Test Logo component render', () => {
  const component = render(
    <Logo/>
  );
  expect(component).toMatchSnapshot()
});
test('Test reverse Logo with sizes component render', () => {
  const component = render(
    <Logo isReverse
      width="150px"
    />
  );
  expect(component).toMatchSnapshot()
});
