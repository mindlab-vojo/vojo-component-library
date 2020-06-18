import React from 'react';
import { withKnobs, text, } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import BannerImage from '.'; 
import Container from '../Container';
import { ThemeProvider } from "../../../src";
import categories from '../../../.storybook/categories';

export const bannerImage = () => {
  const imageUrl = text('imageUrl', 'https://russelservicos.com.br/wp-content/uploads/2016/01/balconista1.jpg')
  const title = text('title', 'Balconista')

  return (
    <BannerImage
      imageUrl={imageUrl}
      title={title}/>
  )
}

export default {
  title: categories.Images,
  component: bannerImage,
  decorators: [
    withKnobs, 
    withA11y, 
    (story) => 
      <ThemeProvider>
        <Container maxWidth="full">
          <Container maxWidth="desktop">
            { story() }
          </Container>
        </Container>
      </ThemeProvider>,
  ],
}

bannerImage.story = {
  name: 'BannerImage',
};
  