import React from 'react';
import { withKnobs, array, boolean, text } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions'

import CarouselSelector from '.'; 
import { ThemeProvider } from "../../../src";
import categories from '../../../.storybook/categories';

export const carouselSelector = () => {  
  const itemsMock = [
    {
      "id": "MS",
      "title": "MS",
    },
    {
      "id": "SP",
      "title": "SP",
    },
    {
      "id": "RJ",
      "title": "RJ",
    },
    {
      "id": "SA",
      "title": "SA",
    },
    {
      "id": "WW",
      "title": "WW",
    },
    {
      "id": "ZZ",
      "title": "ZZ",
    },
    {
      "id": "QA",
      "title": "QA",
    },
    {
      "id": "MB",
      "title": "mb",
    },
  ]
  const description = text('description', "São Paulo, Rio de Janeiro, Rio Grande do Sul, Florianópolis, Belém, Uruguaiana")
  const items = array('items', itemsMock)
  const isLoading = boolean('isLoading', false)
  const onClickItem = action('onClickItem')

  return (
    <CarouselSelector
      description={description}
      isLoading={isLoading}
      items={items}
      onClickItem={onClickItem}
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
  