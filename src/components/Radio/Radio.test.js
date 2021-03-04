import React from 'react';
import { render } from '@testing-library/react';

import Radio from './';
import { ThemeProvider } from './../../style/ThemeManager/ThemeProvider';

test('Test Radio component render', () => {
  const fakeFn = jest.fn()
  const component = render(
    <ThemeProvider>
      <Radio
        id="radio"
        label="radio"
        name="radio"
        onClickRadio={fakeFn}
      />
    </ThemeProvider>
  );
  expect(component).toMatchSnapshot()
});
