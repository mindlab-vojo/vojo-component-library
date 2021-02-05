import React from 'react';
import { render } from '@testing-library/react';

import CouponCard from './';
import { ThemeProvider } from './../../style/ThemeManager/ThemeProvider';

test('Test CouponCard component render', () => {
  const component = render(
    <ThemeProvider>
      <CouponCard/>
    </ThemeProvider>
  );
  expect(component).toMatchSnapshot()
});
test('Test Reverse CouponCard component render', () => {
  const component = render(
    <ThemeProvider>
      <CouponCard isReverse/>
    </ThemeProvider>
  );
  expect(component).toMatchSnapshot()
});
