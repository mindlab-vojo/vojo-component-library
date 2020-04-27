import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';

import StickyToast from '.'; 
import { ThemeProvider } from "../../../src";
import categories from '../../../.storybook/categories';

export const component = () => {
  const children = text('children', 'This is a sample test')
  const show = boolean('show', true)
  const onClickClose = action('onClickClose')
  
  return (
    <div style={{ height: "1500px" }}>
      <div style={{ height: "350px" }}>
      </div>
      <StickyToast show={show} onClickClose={onClickClose}>
        {children}
      </StickyToast>
    </div>
  )
}

export default {
  title: categories.StickyToasts,
  component: component,
  decorators: [withKnobs, withA11y, (story) => <ThemeProvider>{ story() }</ThemeProvider>]
}

component.story = {
  name: 'StickyToast',
};
  