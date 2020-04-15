import React from 'react';
import { render } from '@testing-library/react';

import IconManager from './';
import { ThemeProvider } from './../../style/ThemeManager/ThemeProvider';

test('Test IconManager component render', () => {
  const component = render(
    <ThemeProvider>
      <IconManager 
        fill="#000000"
        height="24"
        width="24"
        icon="Lock"/>
    </ThemeProvider>
  );
  expect(component).toMatchSnapshot()
});
