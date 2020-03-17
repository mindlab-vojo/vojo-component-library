import React from 'react';
import Header from '.';

import defaultDecorators from '../../../.storybook/decorators';
import categories from '../../../.storybook/categories';

export default {
  title: categories.Headers,
  component: Header,
  decorators: [...defaultDecorators]
}

export const component = () => {
  return <Header/>
}

component.story = {
  name: 'Header',
};
  