import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import Checkbox from '.'; 
import { ThemeProvider } from "../../../src";
import categories from '../../../.storybook/categories';

export const component = () => {
  const termsUrl = text('termsUrl', 'https://app.vojo.com.br/terms-of-use')
  
  return <Checkbox termsUrl={termsUrl}/>
}

export default {
  title: categories.Checkbox,
  component: component,
  decorators: [withKnobs, withA11y, (story) => <ThemeProvider>{ story() }</ThemeProvider>]
}

component.story = {
  name: 'Checkbox',
};
  