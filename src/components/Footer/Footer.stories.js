import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import Footer from '.'; 
import { ThemeProvider } from "../../../src";
import categories from '../../../.storybook/categories';

import Container from '../Container';

export const component = () => {
  const termsUrl = text('termsUrl', 'https://app.vojo.com.br/terms-of-use')
  
  return (
    <Container>
      <div style={{ height: '1000px' }}/>
      <Footer termsUrl={termsUrl}/>
    </Container>
  )
}

export default {
  title: categories.Footers,
  component: component,
  decorators: [withKnobs, withA11y, (story) => <ThemeProvider>{ story() }</ThemeProvider>]
}

component.story = {
  name: 'Footer',
};
  