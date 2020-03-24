import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions'

import Button from '.'; 
import { ThemeProvider } from "../../../src";
import categories from '../../../.storybook/categories';

export const component = () => {
  const type = text('type', 'submit')
  const onButtonClick = action('Clicked')
  
  return (
    <Button
      onButtonClick={onButtonClick}
      type={type}>
      Teste
    </Button>
  )
}

export default {
  title: categories.Buttons,
  component: component,
  decorators: [withKnobs, withA11y, (story) => <ThemeProvider>{ story() }</ThemeProvider>]
}

component.story = {
  name: 'Button',
};
  