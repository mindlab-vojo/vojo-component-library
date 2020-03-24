import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';

import Header from '.';
import categories from '../../../.storybook/categories';
import { ThemeProvider } from "../../../src";

export default {
  title: categories.Headers,
  component: Header,
  decorators: [withKnobs, withA11y, (story) => <ThemeProvider>{ story() }</ThemeProvider>]
}

export const component = () => {
  return <Header/>
}

component.story = {
  name: 'Header',
};
  