import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions'

import ApplicationCard from '.'; 
import { ThemeProvider } from "../../../src";
import categories from '../../../.storybook/categories';

export const applicationCard = () => {
  const currentStep = text("currentStep", "1")
  const jobTitle = text("jobTitle", "Seletor de produtos para entrega (Shopper)")
  const imageUrl = text("imageUrl", "https://russelservicos.com.br/wp-content/uploads/2016/01/balconista1.jpg")  
  const isClosed = boolean("isClosed", false)  
  const onClickCard = action("onClickCard")
  const stepTitle = text("stepTitle", "Procurando empresas")
  const totalSteps = text("totalSteps", "4")
  const fontWeightTitle = text("fontWeightTitle", '700')

  return (
    <ApplicationCard
      currentStep={currentStep}
      imageUrl={imageUrl}
      isClosed={isClosed}
      jobTitle={jobTitle}
      fontWeightTitle={fontWeightTitle}
      onClickCard={onClickCard}
      stepTitle={stepTitle}
      totalSteps={totalSteps}
    />
  )
}

export default {
  title: categories.Cards,
  name: 'ApplicationCard',
  component: applicationCard,
  decorators: [
    withKnobs, 
    withA11y, 
    (story) => <ThemeProvider>{ story() }</ThemeProvider>,
    (story) => <div style={{ display: "flex" }}>{ story() }</div>,
  ],
}
  