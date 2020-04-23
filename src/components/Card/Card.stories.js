import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';

import Card from '.';
import categories from '../../../.storybook/categories';
import { ThemeProvider } from "../../../src";
import Typography from '../Typography';

export default {
  title: categories.Cards,
  component: Card,
  decorators: [withKnobs, withA11y, (story) => <ThemeProvider>{ story() }</ThemeProvider>]
}

export const component = () => {
  return (
    <Card>
      <Typography tag="h2" type="subtitle">
        This is a Card
      </Typography>
      <Typography tag="p" type="default">
        It contains a child object
      </Typography>
    </Card>
  )
}

component.story = {
  name: 'Card',
};
  