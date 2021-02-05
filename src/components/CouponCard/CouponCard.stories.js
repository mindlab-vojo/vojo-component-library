import React from 'react';
import { withKnobs, text, boolean, color } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import CouponCard from '.'; 
import { ThemeProvider } from "../../../src";
import categories from '../../../.storybook/categories';

export const couponCard = () => {
  const backgroundColor = color('backgroundColor', "#E9E5FF")
  const id = text('id', 'card-id')
  const justifyContent = text('justifyContent', 'space-between')
  const date = text('date', 'Descubra sites de empresas que te ajudam a gerar renda ')
  const title = text('title', 'CAMPINAS123')
  const isActive = boolean('isValid', true)

  return (
    <CouponCard
      backgroundColor={backgroundColor}
      id={id}
      isActive={isActive}
      justifyContent={justifyContent}
      date={date}
      title={title}
    />
  )
}

export default {
  title: categories.Cards,
  name: 'CouponCard',
  component: couponCard,
  decorators: [
    withKnobs, 
    withA11y, 
    (story) => <ThemeProvider>{ story() }</ThemeProvider>,
    (story) => <div style={{ display: "flex" }}>{ story() }</div>,
  ],
}
  