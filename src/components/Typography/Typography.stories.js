import React from 'react';
import Typography from '.';
import { color, text } from '@storybook/addon-knobs';

import defaultDecorators from '../../../.storybook/decorators';
import categories from '../../../.storybook/categories';

export default {
  title: categories.Typographys,
  component: Typography,
  decorators: [...defaultDecorators]
}

export const component = () => {

  const children = text('children', 'Hello Vojo')
  const tag = text('tag', 'p')
  const componentColor = color('color', '#0000C6')
  const type = text('type', 'default')

  return (
    <Typography tag={tag}
      color={componentColor}
      type={type}>
      {children}
    </Typography>
  )
}

component.story = {
  name: 'Typography',
};
  