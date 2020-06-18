import React from 'react';
import { withKnobs, text, } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import BannerImage from '.'; 
import { ThemeProvider } from "../../../src";
import categories from '../../../.storybook/categories';

export const bannerImage = () => {
  const imageUrl = text('imageUrl', 'https://guiadafarmacia.com.br/wp-content/uploads/2019/05/shutterstock_1345420442.png')
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
    (story) => <ThemeProvider>{ story() }</ThemeProvider>,
    (story) => <div style={{ width: "260px" }}>{ story() }</div>,
  ],
}

bannerImage.story = {
  name: 'BannerImage',
};
  