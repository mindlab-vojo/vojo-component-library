import React from 'react';
import { render } from '@testing-library/react';

import CourseCard from './';
import { ThemeProvider } from './../../style/ThemeManager/ThemeProvider';

test('Test CourseCard component render', () => {
  const component = render(
    <ThemeProvider>
      <CourseCard/>
    </ThemeProvider>
  );
  expect(component).toMatchSnapshot()
});
test('Test Reverse CourseCard component render', () => {
  const component = render(
    <ThemeProvider>
      <CourseCard isReverse/>
    </ThemeProvider>
  );
  expect(component).toMatchSnapshot()
});
