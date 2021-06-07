import React from 'react';
import { render } from '@testing-library/react';

import ApplicationCard from './';
import { ThemeProvider } from './../../style/ThemeManager/ThemeProvider';

test('Test ApplicationCard component render', () => {
  const fakeFn = jest.fn()
  const component = render(
    <ThemeProvider>
      <ApplicationCard 
        currentStep={1}
        jobTitle={"Seletor de produtos para entrega (Shopper)"}
        imageUrl={"https://russelservicos.com.br/wp-content/uploads/2016/01/balconista1.jpg"}
        isClosed={false}
        onClickCard={fakeFn}
        stepTitle={"Procurando empresas"}
        totalSteps={4}
      />
    </ThemeProvider>
  );
  expect(component).toMatchSnapshot()
});
