import React from 'react';
import { render } from '@testing-library/react';

import Select from './';
import { ThemeProvider } from './../../style/ThemeManager/ThemeProvider';

test('Test Select component render', () => {
  const fakeFn = jest.fn()
  const component = render(
    <ThemeProvider>
      <Select 
        options={[{
          value: 1,
          description: "Sem instrução",
          code: "NDA",
        },
        {
          value: 2,
          description: "Ensino fundamental incompleto ou equivalente",
          code: "EFI",
        }, 
        {
          value: 3,
          description: "Ensino fundamental completo ou equivalente",
          code: "EFC",
        }, 
        {
          value: 4,
          description: "Ensino médio incompleto ou equivalente",
          code: "EMI",
        },]}/>
    </ThemeProvider>
  );
  expect(component).toMatchSnapshot()
});
