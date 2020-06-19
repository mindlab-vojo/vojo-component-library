import React from 'react';
import { withKnobs, array } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import CarouselSelector from '.'; 
import { ThemeProvider } from "../../../src";
import categories from '../../../.storybook/categories';

export const carouselSelector = () => {  
  const itemsMock = [
    {
      "id": "MS",
      "title": "MS",
      "description": "Araquari, São José"
    },
    {
      "id": "SP",
      "title": "SP",
      "description": "São Paulo, Campinas, São José dos Campos, São Caetano do Sul"
    },
    {
      "id": "MS",
      "title": "RJ",
      "description": "Rio de Janeiro"
    },
  ]
  const items = array('items', itemsMock)

  return (
    <CarouselSelector
      items={items}
    />
  )
}

export default {
  title: categories.Dropdowns,
  name: 'CarouselSelector',
  component: carouselSelector,
  decorators: [
    withKnobs, 
    withA11y, 
    (story) => <ThemeProvider>{ story() }</ThemeProvider>,
    (story) => <div style={{ display: "flex" }}>{ story() }</div>,
  ],
}
  