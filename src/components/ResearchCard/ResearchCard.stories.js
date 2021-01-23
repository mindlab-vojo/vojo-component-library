import React from 'react';
import { withKnobs, text, color, select } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions'

import ResearchCard from '.'; 
import { ThemeProvider } from "../../../src";
import categories from '../../../.storybook/categories';

export const researchCard = () => {
  const description = text("description", "Responda a nossa pesquisa e fique por dentro das novidades.")
  const iconBackgroundColor = color("iconBackgroundColor", "#391DDD")
  const lineHeight = text('lineHeight', '1.1')
  const onClickCard = action("onClickCard")
  const title = text("title", "Não achou o que queria?")
  const buttonText = text("buttonText", "VER")
  
  return (
    <ResearchCard
      description={description}
      iconBackgroundColor={iconBackgroundColor}
      lineHeight={lineHeight}
      onClickCard={onClickCard}
      title={title}
      buttonText={buttonText}
    />
  )
}

export default {
  title: categories.Cards,
  name: 'ResearchCard',
  component: researchCard,
  decorators: [
    withKnobs, 
    withA11y, 
    (story) => <ThemeProvider>{ story() }</ThemeProvider>,
    (story) => <div style={{ display: "flex" }}>{ story() }</div>,
  ],
}
  