import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import Spinner from '.'; 
import { ThemeProvider } from "../../../src";
import categories from '../../../.storybook/categories';

import Container from '../Container';

export const component = () => {  
  const height = text('height', '50px')
  const spinnerArea = text('spinnerArea', '100px')
  const width = text('width', '50px')

  return (
    <Container>
      <Spinner 
        height={height}
        spinnerArea={spinnerArea}
        width={width}/>
    </Container>
  )
}

export default {
  title: categories.Spinners,
  component: component,
  decorators: [withKnobs, withA11y, (story) => <ThemeProvider>{ story() }</ThemeProvider>]
}

component.story = {
  name: 'Spinner',
};
  