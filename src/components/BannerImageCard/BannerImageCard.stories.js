import React from 'react';
import { withKnobs, text, } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import BannerImageCard from '.'; 
import Container from '../Container';
import { ThemeProvider } from "../../../src";
import categories from '../../../.storybook/categories';

export const bannerImageCard = () => {
  const imageUrl = text('imageUrl', 'https://russelservicos.com.br/wp-content/uploads/2016/01/balconista1.jpg')
  const subtitle = text('subtitle', 'Ver detalhes da função')
  const title = text('title', 'Balconista')

  return (
    <BannerImageCard
      imageUrl={imageUrl}
      subtitle={subtitle}
      title={title}/>
  )
}

export default {
  title: categories.Images,
  component: bannerImageCard,
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

bannerImageCard.story = {
  name: 'BannerImageCard',
};
  