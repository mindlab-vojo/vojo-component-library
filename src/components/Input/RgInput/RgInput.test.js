import React from 'react';
import { render } from '@testing-library/react';

import RgInput from './';
import { ThemeProvider } from './../../../style/ThemeManager/ThemeProvider';

test('Test RgInput component render', () => {
  const fakeFn = jest.fn()
  const component = render(
    <ThemeProvider>
      <RgInput
        disabled={false}
        id="vojo-test"
        label="teste"
        name="teste"
        onTextInputBlur={fakeFn}
        onTextInputChange={fakeFn}
        placeholder=""
        type="text"
        value=""/>
    </ThemeProvider>
  );
  expect(component).toMatchSnapshot()
});