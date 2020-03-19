import React from 'react';
import Logo from '.';
import { text, boolean } from '@storybook/addon-knobs';

import defaultDecorators from '../../../.storybook/decorators';
import categories from '../../../.storybook/categories';

export default {
  title: categories.Logos,
  component: Logo,
  decorators: [...defaultDecorators]
}

const height = text("height", "auto")
const width = text("width", "100px")
const isReverse = boolean("isReverse", false)

export const component = () => {
  return <Logo height={height} width={width} isReverse={isReverse}/>
}

component.story = {
  name: 'Logo',
};
  