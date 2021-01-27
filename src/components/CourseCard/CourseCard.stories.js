import React from 'react';
import { withKnobs, text, number, boolean, object, color } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions'

import CourseCard from '.'; 
import { ThemeProvider } from "../../../src";
import categories from '../../../.storybook/categories';

export const courseCard = () => {
  const backgroundColor = color('backgroundColor', "#FFFFFF")
  const borderRadius = text('borderRadius', '0')
  const id = text('id', 'card-id')
  const imageUrl = text('imageUrl', 'https://s3.amazonaws.com/static.vojo.com.br/prd/images/icon_servicos.PNG')
  const isNew = boolean('isNew', true)
  const isFree = boolean('isFree', true)
  const onClickCard = action('onClickCard')
  const subtitle = text('subtitle', '')
  const subtitleColor = color('subtitleColor', "#212529")
  const title = text('title', 'Entregador Mágico')
  const titleColor = color('titleColor', "#5320E8")
  const workload = text('workload', '60 min')
  return (
    <CourseCard
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      id={id}
      imageUrl={imageUrl}
      isFree={isFree}
      isNew={isNew}
      onClickCard={onClickCard}
      subtitle={subtitle}
      subtitleColor={subtitleColor}
      title={title}
      titleColor={titleColor}
      workload={workload}
    />
  )
}

export default {
  title: categories.Cards,
  name: 'CourseCard',
  component: courseCard,
  decorators: [
    withKnobs, 
    withA11y, 
    (story) => <ThemeProvider>{ story() }</ThemeProvider>,
    (story) => <div style={{ display: "flex" }}>{ story() }</div>,
  ],
}
  