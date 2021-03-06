import React from 'react';
import { withKnobs, text, color, boolean } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions'

import Button from '.'; 
import { ThemeProvider } from "../../../src";
import categories from '../../../.storybook/categories';

export const component = () => {
  const backgroundColor = color('backgroundColor', '#391DDD')
  const borderColor = color('borderColor', '#391DDD')
  const retangular = boolean('retangular', false)
  const children = text('children', 'Hello Vojo')
  const hoverColor = color('hoverColor', '#391DDD')
  const id = text('id', 'button')
  const name = text('name', 'button')
  const form = text('form', 'formId')
  const onButtonClick = action('Clicked')
  const textColor = color('textColor', '#FFFFFF')
  const type = text('type', 'submit')
  const letterSpacing = text('letterSpacing', "1px")

  return (
    <Button
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      retangular={retangular}
      hoverColor={hoverColor}
      id={id}
      name={name}
      form={form}
      onButtonClick={onButtonClick}
      textColor={textColor}
      type={type}
      letterSpacing={letterSpacing}>
      {children}
    </Button>
  )
}

export default {
  title: categories.Buttons,
  component: component,
  decorators: [
    withKnobs, 
    withA11y, 
    (story) => <ThemeProvider>{ story() }</ThemeProvider>,
    (story) => <div style={{ width: "260px" }}>{ story() }</div>,
  ],
}

component.story = {
  name: 'Button',
};
  