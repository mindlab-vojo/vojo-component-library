import React from 'react';
import Logo from '.';
import { text } from '@storybook/addon-knobs';

import defaultDecorators from '../../../.storybook/decorators';
import categories from '../../../.storybook/categories';

export default {
  title: categories.Logos,
  component: Logo,
  decorators: [...defaultDecorators]
}

const height = text("height", "auto")
const width = text("width", "100px")

export const component = () => {
  return <Logo height={height} width={width}/>
}

component.story = {
  name: 'Logo',
};
  