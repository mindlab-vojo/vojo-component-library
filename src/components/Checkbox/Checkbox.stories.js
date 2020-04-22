import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions'

import Checkbox from '.'; 
import { ThemeProvider } from "../../../src";
import categories from '../../../.storybook/categories';

export const component = () => {
  const id = text('id', 'Checkbox')
  const label = text('label', 'checkbox')
  const name = text('name', 'checkbox')
  const onClickCheckbox = action('onClickCheckbox')
  
  return <Checkbox
    id={id}
    label={label}
    name={name}
    onClickCheckbox={onClickCheckbox}
  />
}

export default {
  title: categories.Checkbox,
  component: component,
  decorators: [withKnobs, withA11y, (story) => <ThemeProvider>{ story() }</ThemeProvider>]
}

component.story = {
  name: 'Checkbox',
};
  