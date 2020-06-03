import React from 'react';
import { withKnobs, text, array } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions'

import FilterDropdown from '.'; 
import { ThemeProvider } from "../../../src";
import categories from '../../../.storybook/categories';

export const component = () => {
  const optionsList = [
    {
      id: '1',
      name: 'Leonardo'
    },
    {
      id: '2',
      name: 'Renata'
    },
    {
      id: '3',
      name: 'Robson'
    },
    {
      id: '4',
      name: 'Ana Carolina'
    },
  ]

  const onSelectOption = action('onSelectOption')
  const placeholder = text('placeholder', 'Mais recentes')
  const options = array('options', optionsList)

  return (
    <FilterDropdown
      onSelectOption={onSelectOption}
      options={options}
      placeholder={placeholder}
    />
  )
}

export default {
  title: categories.Dropdowns,
  component: component,
  decorators: [
    withKnobs, 
    withA11y, 
    (story) => <ThemeProvider>{ story() }</ThemeProvider>,
    (story) => <div style={{ display: "flex" }}>{ story() }</div>,
  ],
}

component.story = {
  name: 'FilterDropdown',
};
  