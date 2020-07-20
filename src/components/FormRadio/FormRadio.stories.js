import React from 'react';
import { withKnobs, text, array } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions'

import FormRadio from '.'; 
import { ThemeProvider } from "../../../src";
import categories from '../../../.storybook/categories';

export const formRadio = () => {
  const optionsList = [
    {
      id: '1',
      title: 'Opção 1',
      value: 'leonardo',
    },
    {
      id: '2',
      title: 'Opção 2',
      value: 'renata',
    },
    {
      id: '3',
      title: 'Opção 3',
      value: 'robson',
    },
    {
      id: '4',
      title: 'Opção 4',
      value: 'ana-carolina',
    },
  ]

  const hasToolTip = text('hasToolTip', '')
  const onClickOption = action('onClickOption')
  const onClickToolTip = action('onClickToolTip')
  const options = array('options', optionsList)
  const description = text('description', 'Breve descrição da pergunta')
  const title = text('title', 'Título da Pergunta')

  return (
    <FormRadio
      hasToolTip={hasToolTip}
      onClickOption={onClickOption}
      onClickToolTip={onClickToolTip}
      options={options}
      description={description}
      title={title}
    />
  )
}

export default {
  title: categories.Radios,
  component: formRadio,
  decorators: [
    withKnobs, 
    withA11y, 
    (story) => <ThemeProvider>{ story() }</ThemeProvider>,
    (story) => <div style={{ display: "flex" }}>{ story() }</div>,
  ],
}

formRadio.story = {
  name: 'FormRadio',
};
  