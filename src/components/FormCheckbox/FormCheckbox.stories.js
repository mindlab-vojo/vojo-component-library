import React from 'react';
import { withKnobs, text, array, boolean, object } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions'

import FormCheckbox from '.'; 
import { ThemeProvider } from "../../../src";
import categories from '../../../.storybook/categories';

export const formCheckbox = () => {
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

  const preSelectedOptions = array('preSelectedOptions', ['1', '3'])
  const errorMessage = text('errorMessage', 'Este campo possui algum erro...')
  const hasError = boolean('hasError', false)
  const hasToolTip = boolean('hasToolTip', true)
  const tooltipData = object('tooltipData', tooltipDataObject)
  const onClickOption = action('onClickOption')
  const onClickToolTip = action('onClickToolTip')
  const options = object('options', optionsList)
  const description = text('description', 'Breve descrição da pergunta')
  const title = text('title', 'Título da Pergunta')
  const hasAllOptions = boolean('hasAllOptions', true)

  return (
    <FormCheckbox
      description={description}
      errorMessage={errorMessage}
      hasAllOptions={hasAllOptions}
      hasError={hasError}
      hasToolTip={hasToolTip}
      onClickOption={onClickOption}
      onClickToolTip={onClickToolTip}
      options={options}
      preSelectedOptions={preSelectedOptions}
      tooltipData={tooltipData}
      title={title}
    />
  )
}

export default {
  title: categories.Radios,
  component: formCheckbox,
  decorators: [
    withKnobs, 
    withA11y, 
    (story) => <ThemeProvider>{ story() }</ThemeProvider>,
    (story) => <div style={{ display: "flex" }}>{ story() }</div>,
  ],
}

formCheckbox.story = {
  name: 'FormCheckbox',
};
  