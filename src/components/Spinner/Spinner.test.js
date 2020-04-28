import React from 'react';
import { render } from '@testing-library/react';

import Spinner from './';
import { ThemeProvider } from './../../style/ThemeManager/ThemeProvider';

test('Test Spinner component render', () => {
  const component = render(
    <ThemeProvider>
      <Spinner/>
    </ThemeProvider>
  );
  expect(component).toMatchSnapshot()
});
