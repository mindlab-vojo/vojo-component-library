import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, select, text } from '@storybook/addon-knobs';

import IconManager from '.';
import categories from '../../../.storybook/categories';
import { ThemeProvider } from "../../../src";
import { iconList } from './IconManager';

export default {
  title: categories.Icons,
  component: IconManager,
  decorators: [withKnobs, withA11y, (story) => <ThemeProvider>{ story() }</ThemeProvider>]
}

export const component = () => {
  const icon = select('icon', Object.keys(iconList), Object.keys(iconList)[0])
  const height = text('height', '24')
  const width = text('width', '24')

  return <IconManager 
    height={height}
    width={width}
    icon={icon}/>
}

component.story = {
  name: 'IconManager',
};
  