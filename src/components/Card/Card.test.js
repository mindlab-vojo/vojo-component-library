import React from 'react';
import { render } from '@testing-library/react';

import Card from './';
import { ThemeProvider } from './../../style/ThemeManager/ThemeProvider';

test('Test Card component render', () => {
  const component = render(
    <ThemeProvider>
      <Card/>
    </ThemeProvider>
  );
  expect(component).toMatchSnapshot()
});
