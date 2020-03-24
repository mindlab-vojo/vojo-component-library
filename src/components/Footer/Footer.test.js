import React from 'react';
import { render } from '@testing-library/react';

import Footer from './';
import { ThemeProvider } from './../../style/ThemeManager/ThemeProvider';

test('Test Footer component render', () => {
  const component = render(
    <ThemeProvider>
      <Footer termsUrl="https://app.vojo.com.br/terms-of-use"/>
    </ThemeProvider>
  );
  expect(component).toMatchSnapshot()
});
