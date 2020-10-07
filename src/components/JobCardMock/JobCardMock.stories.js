import React from 'react';
import { withKnobs, text, number, boolean, object } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions'

import JobCardMock from '.'; 
import { ThemeProvider } from "../../../src";
import categories from '../../../.storybook/categories';

export const jobCardMock = () => {
  const locationsList = [{
    "country": "Brasil",
    "states": ["SP", "RJ"]
  }]
  
  const companyNumber = number('companyNumber', 5)
  const id = text('id', 'card-id')
  const imageUrl = text('imageUrl', 'https://cdnb.artstation.com/p/assets/images/images/011/745/187/large/emma-areum-kim-kiki10-01psd.jpg')
  const isNew = boolean('isNew', true)
  const isUnavailable = boolean('isUnavailable', false)
  const locations = object('locations', locationsList)
  const onClickCard = action('onClickCard')
  const slots = number('slots', 200)
  const title = text('title', 'Entregador Mágico')

  return (
    <JobCardMock
      companyNumber={companyNumber}
      id={id}
      imageUrl={imageUrl}
      isNew={isNew}
      isUnavailable={isUnavailable}
      locations={locations}
      onClickCard={onClickCard}
      slots={slots}
      title={title}
    />
  )
}

export default {
  title: categories.Cards,
  name: 'JobCardMock',
  component: jobCardMock,
  decorators: [
    withKnobs, 
    withA11y, 
    (story) => <ThemeProvider>{ story() }</ThemeProvider>,
    (story) => <div style={{ display: "flex" }}>{ story() }</div>,
  ],
}
  