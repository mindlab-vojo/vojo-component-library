import React from 'react';
import { render } from '@testing-library/react';

import FilterDropdown from './';
import { ThemeProvider } from './../../style/ThemeManager/ThemeProvider';

test('Test FilterDropdown component render', () => {
  const fakeFn = jest.fn()
  const component = render(
    <ThemeProvider>
      <FilterDropdown 
        onSelectOption={fakeFn}
        options={[{ id: "1", name: "Test", value: "test-1" }]}
        placeholder={"Test"}
      />
    </ThemeProvider>
  );
  expect(component).toMatchSnapshot()
});
