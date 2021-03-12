import React from 'react';
import { color, text, boolean, object, withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import Typography from '.';
import categories from '../../../.storybook/categories';
import { ThemeProvider } from "../../../src";


export const component = () => {

  const children = text('children', 'Hello Vojo')
  const tag = text('tag', 'p')
  const componentColor = color('color', '#0000C6')
  const type = text('type', 'default')
  const isUnderlined = boolean('isUnderlined', false)
  const additionalProps = object('additionalProps', '')
  const letterSpacing = text('letterSpacing', "1px")

  return (
    <Typography tag={tag}
      color={componentColor}
      type={type}
      isUnderlined={isUnderlined}
      additionalProps={additionalProps}
      letterSpacing={letterSpacing}>
      {children}
    </Typography>
  )
}

export default {
  title: categories.Typographys,
  component: component,
  decorators: [withKnobs, withA11y, (story) => <ThemeProvider>{ story() }</ThemeProvider>]
}

component.story = {
  name: 'Typography',
};
  