import React from 'react';
import Card from '.';
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { withA11y } from '@storybook/addon-a11y';

import { ThemeProvider } from './../../ThemeManager/ThemeProvider'
import { redVojo } from './../../style/themes'

export default {
  title: 'Card',
  component: Card,
  decorators: [withKnobs, withA11y]
}

export const component = () => {
  const description = text("description", "It's difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, although McClintock says he remembers coming across the lorem ipsum passage in a book of old metal type samples.")
  const image = text("image", "https://lastfm.freetls.fastly.net/i/u/770x0/5721b67079174fcccfe65965458b2559.jpg")
  const title = text("title", "Card Sample")
  const redTheme = boolean("Red Themed", false)
  return (
    <ThemeProvider theme={redTheme ? redVojo : null}>
      <div>
        <Card 
          description={description} 
          image={image}
          title={title}
        />
      </div>
    </ThemeProvider>
  )
}

component.story = {
  name: 'Card',
};
  