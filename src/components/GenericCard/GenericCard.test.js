import React from 'react';
import { render } from '@testing-library/react';

import GenericCard from './';
import { ThemeProvider } from './../../style/ThemeManager/ThemeProvider';

test('Test GenericCard component render', () => {
  const component = render(
    <ThemeProvider>
      <GenericCard/>
    </ThemeProvider>
  );
  expect(component).toMatchSnapshot()
});
test('Test Reverse GenericCard component render', () => {
  const component = render(
    <ThemeProvider>
      <GenericCard isReverse/>
    </ThemeProvider>
  );
  expect(component).toMatchSnapshot()
});
