import React from 'react';
import { render } from '@testing-library/react';

import PasswordInput from './';
import { ThemeProvider } from './../../../style/ThemeManager/ThemeProvider';

test('Test PasswordInput component render', () => {
  const fakeFn = jest.fn()
  const component = render(
    <ThemeProvider>
      <PasswordInput
        disabled={false}
        id="vojo-test"
        label="teste"
        name="teste"
        onPasswordInputBlur={fakeFn}
        onPasswordInputChange={fakeFn}
        placeholder=""
        type="text"
        value=""/>
    </ThemeProvider>
  );
  expect(component).toMatchSnapshot()
});