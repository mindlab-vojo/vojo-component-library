import React from 'react';
import { render } from '@testing-library/react';

import Checkbox from './';
import { ThemeProvider } from './../../style/ThemeManager/ThemeProvider';

test('Test Checkbox component render', () => {
  const fakeFn = jest.fn()
  const component = render(
    <ThemeProvider>
      <Checkbox
        id="checkbox"
        label="checkbox"
        name="checkbox"
        onClickCheckbox={fakeFn}
      />
    </ThemeProvider>
  );
  expect(component).toMatchSnapshot()
});
