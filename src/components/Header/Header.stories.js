import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';

import Header from '.';
import categories from '../../../.storybook/categories';
import { ThemeProvider } from "../../../src";

export const header = () => {
  return <Header/>
}

header.story = {
  name: 'Header',
};

export default {
  title: categories.Headers,
  component: header,
  decorators: [withKnobs, withA11y, (story) => <ThemeProvider>{ story() }</ThemeProvider>]
}
  