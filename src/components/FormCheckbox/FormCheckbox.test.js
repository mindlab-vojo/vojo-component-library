import React from 'react';
import { render } from '@testing-library/react';

import FormCheckbox from './';
import { ThemeProvider } from './../../style/ThemeManager/ThemeProvider';

test('Test FormCheckbox component render', () => {
  const fakeFn = jest.fn()
  const component = render(
    <ThemeProvider>
      <FormCheckbox 
        description="Este é um exemplo de descrição"
        errorMessage="Este é um erro"
        hasError={true}
        hasToolTip={true}
        onClickOption={fakeFn}
        onClickToolTip={fakeFn}
        options={[
          {
            id: '1',
            title: 'Opção 1',
            value: 'leonardo',
          },
          {
            id: '2',
            title: 'Opção 2',
            value: 'renata',
          },
          {
            id: '3',
            title: 'Opção 3',
            value: 'robson',
          },
          {
            id: '4',
            title: 'Opção 4',
            value: 'ana-carolina',
          },
        ]}
        tooltipData={{
          title: "Título do Modal",
          description: "Descrição que aparecerá no modal, normalmente descreverá detalhes dos requisistos deste campo."
        }}
        title="Título"
      />
    </ThemeProvider>
  );
  expect(component).toMatchSnapshot()
});
