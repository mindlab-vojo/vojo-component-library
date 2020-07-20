import React from 'react';
import { withKnobs, text, array, boolean, object } from '@storybook/addon-knobs';
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

  const tooltipDataObject = {
    title: "Título do Modal",
    description: "Descrição que aparecerá no modal, normalmente descreverá detalhes dos requisistos deste campo."
  }

  const errorMessage = text('errorMessage', 'Este campo possui algum erro...')
  const hasError = boolean('hasError', false)
  const hasToolTip = boolean('hasToolTip', true)
  const tooltipData = object('tooltipData', tooltipDataObject)
  const onClickOption = action('onClickOption')
  const onClickToolTip = action('onClickToolTip')
  const options = array('options', optionsList)
  const description = text('description', 'Breve descrição da pergunta')
  const title = text('title', 'Título da Pergunta')

  return (
    <FormRadio
      description={description}
      errorMessage={errorMessage}
      hasError={hasError}
      hasToolTip={hasToolTip}
      onClickOption={onClickOption}
      onClickToolTip={onClickToolTip}
      options={options}
      tooltipData={tooltipData}
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
  