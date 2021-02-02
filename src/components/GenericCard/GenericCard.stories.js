import React from 'react';
import { withKnobs, text, boolean, color } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions'

import GenericCard from '.'; 
import { ThemeProvider } from "../../../src";
import categories from '../../../.storybook/categories';

export const genericCard = () => {
  const backgroundColor = color('backgroundColor', "#FFFFFF")
  const borderRadius = text('borderRadius', '0')
  const fontWeightSubtitle = text('fontWeightSubtitle', 'bolder')
  const id = text('id', 'card-id')
  const imageUrl = text('imageUrl', 'https://s3.amazonaws.com/static.vojo.com.br/prd/images/icon_servicos.PNG')
  const isNew = boolean('isNew', true)
  const isFree = boolean('isFree', true)
  const justifyContent = text('justifyContent', 'space-between')
  const onClickCard = action('onClickCard')
  const subtitle = text('subtitle', 'Descubra sites de empresas que te ajudam a gerar renda ')
  const subtitleColor = color('subtitleColor', "")
  const title = text('title', 'Entregador Mágico')
  const titleColor = color('titleColor', "#5320E8")
  const titleSize = text('titleSize', '14px')
  const workload = text('workload', '60 min')
  return (
    <GenericCard
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      fontWeightSubtitle={fontWeightSubtitle}
      id={id}
      imageUrl={imageUrl}
      isFree={isFree}
      isNew={isNew}
      justifyContent={justifyContent}
      onClickCard={onClickCard}
      subtitle={subtitle}
      subtitleColor={subtitleColor}
      title={title}
      titleColor={titleColor}
      titleSize={titleSize}
      workload={workload}
    />
  )
}

export default {
  title: categories.Cards,
  name: 'GenericCard',
  component: genericCard,
  decorators: [
    withKnobs, 
    withA11y, 
    (story) => <ThemeProvider>{ story() }</ThemeProvider>,
    (story) => <div style={{ display: "flex" }}>{ story() }</div>,
  ],
}
  