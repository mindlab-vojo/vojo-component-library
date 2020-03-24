import React from 'react';
import { text, boolean, withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import Logo from '.';
import categories from '../../../.storybook/categories';
import { ThemeProvider } from "../../../src";

export const component = () => {
  const height = text("height", "auto")
  const width = text("width", "100px")
  const isReverse = boolean("isReverse", false)

  return <Logo height={height} width={width} isReverse={isReverse}/>
}

export default {
  title: categories.Logos,
  component: component,
  decorators: [withKnobs, withA11y, (story) => <ThemeProvider>{ story() }</ThemeProvider>]
}

component.story = {
  name: 'Logo',
};
  