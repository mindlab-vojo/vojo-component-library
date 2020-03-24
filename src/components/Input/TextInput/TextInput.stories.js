import React from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions'

import TextInput from '.'; 
import { ThemeProvider } from "../../../../src";
import categories from '../../../../.storybook/categories';

export const component = () => {
  const disabled = boolean('disabled', false)
  const id = text('id', 'vojo-input')
  const name =  text('name', 'vojo-input')
  const onInputBlur = action('onInputBlur')
  const onInputChange = action('onInputChange')
  const placeholder =  text('placeholder', '')
  const type =  text('type', 'text')
  const value =  text('value', '')

  return (
    <TextInput 
      disabled={disabled}
      id={id}
      name={name}
      onInputBlur={onInputBlur}
      onInputChange={onInputChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  )
}

export default {
  title: categories.Inputs,
  component: component,
  decorators: [withKnobs, withA11y, (story) => <ThemeProvider>{ story() }</ThemeProvider>]
}

component.story = {
  name: 'TextInput',
};
  