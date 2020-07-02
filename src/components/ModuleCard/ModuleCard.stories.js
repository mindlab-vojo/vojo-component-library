import React from 'react';
import { withKnobs, text, color, select } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions'

import ModuleCard from '.'; 
import { iconList } from '../IconManager/IconManager'
import { ThemeProvider } from "../../../src";
import categories from '../../../.storybook/categories';

export const moduleCard = () => {
  const description = text("description", "Formulário com informações básicas sobre você para a função que deseja")
  const iconName = select('iconName', Object.keys(iconList), Object.keys(iconList)[0])
  const iconBackgroundColor = color("iconBackgroundColor", "#FF5400")
  const onClickCard = action("onClickCard")
  const title = text("title", "Formulário de Inscrição")
  const time = text("time", "5min.")

  return (
    <ModuleCard
      description={description}
      iconName={iconName}
      iconBackgroundColor={iconBackgroundColor}
      onClickCard={onClickCard}
      title={title}
      time={time}
    />
  )
}

export default {
  title: categories.Cards,
  name: 'ModuleCard',
  component: moduleCard,
  decorators: [
    withKnobs, 
    withA11y, 
    (story) => <ThemeProvider>{ story() }</ThemeProvider>,
    (story) => <div style={{ display: "flex" }}>{ story() }</div>,
  ],
}
  