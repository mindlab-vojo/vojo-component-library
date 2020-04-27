import React from 'react';
import { render } from '@testing-library/react';
import StickyToast from './';

import { ThemeProvider } from './../../style/ThemeManager/ThemeProvider';

test('Test Logo component render', () => {
  const fakeFn = jest.fn()
  const component = render(
    <ThemeProvider>
      <StickyToast show
        onClickClose={fakeFn}>
        Testing!!
      </StickyToast>
    </ThemeProvider>
  );
  expect(component).toMatchSnapshot()
});
