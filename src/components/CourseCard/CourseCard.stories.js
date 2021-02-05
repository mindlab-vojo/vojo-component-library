import React from 'react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions'

import CourseCard from '.'; 
import { ThemeProvider } from "../../../src";
import categories from '../../../.storybook/categories';

export const courseCard = () => {
  const coursesAvailable = number('coursesAvailable', 3)
  const id = text('id', 'card-id')
  const imageUrl = text('imageUrl', 'https://static.vojo.com.br/prd/images/corretor.png')
  const onClickCard = action('onClickCard')
  const title = text('title', 'Aposte em você: confira os cursos disponíveis')
  const workload = text('workload', '60 min')
  const isPremium = boolean('isPremium', true)

  return (
    <CourseCard
      coursesAvailable={coursesAvailable}
      id={id}
      imageUrl={imageUrl}
      isPremium={isPremium}
      onClickCard={onClickCard}
      title={title}
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
  