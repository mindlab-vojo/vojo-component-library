import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';

import Card from '.';
import categories from '../../../.storybook/categories';
import { ThemeProvider } from "../../../src";
import Typography from '../Typography';

export const card = () => {
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

card.story = {
  name: 'Card',
};

export default {
  title: categories.Cards,
  component: card,
  decorators: [withKnobs, withA11y, (story) => <ThemeProvider>{ story() }</ThemeProvider>]
}