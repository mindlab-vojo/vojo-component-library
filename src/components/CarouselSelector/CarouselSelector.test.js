import React from 'react';
import { render } from '@testing-library/react';

import CarouselSelector from './';
import { ThemeProvider } from './../../style/ThemeManager/ThemeProvider';

test('Test CarouselSelector component render', () => {
  const component = render(
    <ThemeProvider>
      <CarouselSelector
        items={[
          {
            "id": "MS",
            "title": "MS",
            "description": "Araquari, São José"
          },
          {
            "id": "SP",
            "title": "SP",
            "description": "São Paulo, Campinas, São José dos Campos, São Caetano do Sul"
          }
        ]}
      />
    </ThemeProvider>
  );
  expect(component).toMatchSnapshot()
});
