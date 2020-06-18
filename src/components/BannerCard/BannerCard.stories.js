import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions'

import BannerCard from '.'; 
import { ThemeProvider } from "../../../src";
import categories from '../../../.storybook/categories';

export const bannerCard = () => {  
  const id = text('id', 'card-id')
  const onClickCard = action('onClickCard')
  const title = text('title', 'Entregador Mágico')
  const description = text('description', 'Entregador Mágico')

  return (
    <BannerCard
      description={description}
      id={id}
      onClickCard={onClickCard}
      title={title}
    />
  )
}

export default {
  title: categories.Cards,
  name: 'BannerCard',
  component: bannerCard,
  decorators: [
    withKnobs, 
    withA11y, 
    (story) => <ThemeProvider>{ story() }</ThemeProvider>,
    (story) => <div style={{ display: "flex" }}>{ story() }</div>,
  ],
}
  