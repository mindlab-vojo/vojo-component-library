import React from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions'

import PasswordInput from '.'; 
import { ThemeProvider } from "../../../../src";
import categories from '../../../../.storybook/categories';

export const passwordInput = () => {
  const disabled = boolean('disabled', false)
  const errorMessage = text('errorMessage', '')
  const id = text('id', 'vojo-input')
  const label = text('label', 'Text Input')
  const name =  text('name', 'vojo-input')
  const onInputBlur = action('onInputBlur')
  const onInputChange = action('onInputChange')
  const placeholder =  text('placeholder', '')
  const showError = boolean('showError', false)
  const type =  text('type', 'text')
  const value =  text('value', '')
  
  
  return (
    <PasswordInput 
      disabled={disabled}
      errorMessage={errorMessage}
      id={id}
      isPassword={true}
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
  component: passwordInput,
  decorators: [
    withKnobs, 
    withA11y, 
    (story) => <ThemeProvider>{ story() }</ThemeProvider>,
    (story) => <div style={{ width: "260px" }}>{ story() }</div>,
  ]
}

passwordInput.story = {
  name: 'PasswordInput',
};
  