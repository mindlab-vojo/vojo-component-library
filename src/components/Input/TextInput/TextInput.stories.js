import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import TextInput from '.'; 
import { ThemeProvider } from "../../../../src";
import categories from '../../../../.storybook/categories';

export const component = () => {
  return <TextInput/>
}

export default {
  title: categories.Inputs,
  component: component,
  decorators: [withKnobs, withA11y, (story) => <ThemeProvider>{ story() }</ThemeProvider>]
}

component.story = {
  name: 'TextInput',
};
  