import React from 'react';
import Typography from '.';

import defaultDecorators from '../../../.storybook/decorators';
import categories from '../../../.storybook/categories';

export default {
  title: categories.Typographys,
  component: Typography,
  decorators: [...defaultDecorators]
}

export const component = () => {
  return (
    <Typography tag="h1"
      color="primaryColor"
      type="default">
        aaaaaaaaaaa
    </Typography>
  )
}

component.story = {
  name: 'Typography',
};
  