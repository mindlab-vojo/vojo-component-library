import React from 'react';
import { render } from '@testing-library/react';

import Header from './';
import { ThemeProvider } from './../../style/ThemeManager/ThemeProvider';

test('Test Header component render', () => {
  const component = render(
    <ThemeProvider>
      <Header/>
    </ThemeProvider>
  );
  expect(component).toMatchSnapshot()
});
