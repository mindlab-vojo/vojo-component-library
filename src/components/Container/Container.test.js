import React from 'react';
import { render } from '@testing-library/react';

import Container from './';
import { ThemeProvider } from './../../style/ThemeManager/ThemeProvider';

test('Test Container component render', () => {
  const component = render(
    <ThemeProvider>
      <Container maxWidth="desktop"/>
    </ThemeProvider>
  );
  expect(component).toMatchSnapshot()
});
