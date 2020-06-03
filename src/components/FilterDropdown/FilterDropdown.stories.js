import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions'

import FilterDropdown from '.'; 
import { ThemeProvider } from "../../../src";
import categories from '../../../.storybook/categories';

export const component = () => {

  return (
    <FilterDropdown/>
  )
}

export default {
  title: categories.Dropdowns,
  component: component,
  decorators: [
    withKnobs, 
    withA11y, 
    (story) => <ThemeProvider>{ story() }</ThemeProvider>,
    (story) => <div style={{ width: "150px" }}>{ story() }</div>,
  ],
}

component.story = {
  name: 'FilterDropdown',
};
  