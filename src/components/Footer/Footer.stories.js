import React from 'react';
import Footer from '.';

import defaultDecorators from '../../../.storybook/decorators';
import categories from '../../../.storybook/categories';

export default {
  title: categories.Footers,
  component: Footer,
  decorators: [...defaultDecorators]
}

export const component = () => {
  return <Footer/>
}

component.story = {
  name: 'Footer',
};
  