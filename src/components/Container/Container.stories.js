import React from 'react';
import { withKnobs,  select } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import Container from '.'; 
import { ThemeProvider } from "../../../src";
import categories from '../../../.storybook/categories';

export const component = () => {

  const maxWidthOptions = [
    'desktop',
    'full',
    'mobile'
  ]
  
  const maxWidth = select('maxWidth', maxWidthOptions, maxWidthOptions[0])

  return (
    <Container maxWidth="full">
      <Container maxWidth={maxWidth}>
        <div style={{ backgroundColor: '#FF0000', height: '300px', width: '100%' }}></div>
      </Container>
    </Container>
  )
}

export default {
  title: categories.Containers,
  component: Container,
  decorators: [withKnobs, withA11y, (story) => <ThemeProvider>{ story() }</ThemeProvider>]
}

component.story = {
  name: 'Container',
};
  