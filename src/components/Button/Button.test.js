import React from 'react';
import { render } from '@testing-library/react';

import Button from './';
import { ThemeProvider } from './../../style/ThemeManager/ThemeProvider';

test('Test Button component render', () => {
  const fakeFn = jest.fn()
  const component = render(
    <ThemeProvider>
      <Button
        id="button-test"
        name="button-name"
        form="formId"
        onButtonClick={fakeFn}
        type="button">
        Hello Vojo
      </Button>
    </ThemeProvider>
  );
  expect(component).toMatchSnapshot()
});