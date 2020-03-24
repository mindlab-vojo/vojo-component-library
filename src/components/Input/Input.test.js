import React from 'react';
import { render } from '@testing-library/react';

import Input from './';
import { ThemeProvider } from './../../style/ThemeManager/ThemeProvider';

test('Test Input component render', () => {
  const fakeFn = jest.fn()
  const component = render(
    <ThemeProvider>
      <Input
        disabled={false}
        id="vojo-test"
        label="teste"
        name="teste"
        onInputBlur={fakeFn}
        onInputChange={fakeFn}
        placeholder=""
        type="text"
        value=""/>
    </ThemeProvider>
  );
  expect(component).toMatchSnapshot()
});