import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions'

import Header from '.';
import categories from '../../../.storybook/categories';
import { ThemeProvider } from "../../../src";
import { menuButtons, menuItems, termsObject } from '../SideMenu/SideMenu.stories';

export const header = () => {
  const buttons = object('menuButtons', menuButtons)
  const items = object('menuItems', menuItems)
  const onClickLogo = action('onClickLogo')
  const tems = object('menuTems', termsObject)

  return (
    <Header
      menuButtons={buttons}
      menuItems={items}
      onClickLogo={onClickLogo}
      menuTems={tems}
    />
  )
}

header.story = {
  name: 'Header',
};

export default {
  title: categories.Headers,
  component: header,
  decorators: [withKnobs, withA11y, (story) => <ThemeProvider>{ story() }</ThemeProvider>]
}
  