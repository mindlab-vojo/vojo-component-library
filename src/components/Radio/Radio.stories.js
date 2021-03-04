import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions'

import Radio from '.'; 
import { ThemeProvider } from "../../../src";
import categories from '../../../.storybook/categories';

export const radio = () => {
  const id = text('id', 'radio')
  const label = text('label', 'Radio')
  const name = text('name', 'radio')
  const onClickRadio = action('onClickRadio')
  
  return <Radio
    id={id}
    label={label}
    name={name}
    onClickRadio={onClickRadio}
  />
}

export default {
  title: categories.Radios,
  component: radio,
  decorators: [
    withKnobs, 
    withA11y, 
    (story) => <ThemeProvider>{ story() }</ThemeProvider>]
}

radio.story = {
  name: 'Radio',
};
  