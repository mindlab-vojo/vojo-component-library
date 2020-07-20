import React from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions'

import CepInput from '.'; 
import { ThemeProvider } from "../../../../src";
import categories from '../../../../.storybook/categories';

export const cepInput = () => {
  const disabled = boolean('disabled', false)
  const errorMessage = text('errorMessage', '')
  const id = text('id', 'vojo-email')
  const isPassword = boolean('isPassword', false)
  const label = text('label', 'CEP')
  const name =  text('name', 'vojo-input')
  const onInputBlur = action('onInputBlur')
  const onInputChange = action('onInputChange')
  const placeholder =  text('CEP', '')
  const showError = boolean('showError', false)
  const type =  text('type', 'text')
  const value =  text('value', '')

  return (
    <CepInput 
      disabled={disabled}
      errorMessage={errorMessage}
      id={id}
      isPassword={isPassword}
      label={label}
      name={name}
      onInputBlur={onInputBlur}
      onInputChange={onInputChange}
      placeholder={placeholder}
      showError={showError}
      type={type}
      value={value}
    />
  )
}

export default {
  title: categories.Inputs,
  component: cepInput,
  decorators: [
    withKnobs, 
    withA11y, 
    (story) => <ThemeProvider>{ story() }</ThemeProvider>,
    (story) => <div style={{ width: "260px" }}>{ story() }</div>,
  ]
}

cepInput.story = {
  name: 'CepInput',
};
