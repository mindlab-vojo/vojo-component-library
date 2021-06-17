import React from 'react';
import { withKnobs, text, select, boolean, number } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions'

import Select from '.';
import { ThemeProvider } from "../../../src";
import categories from '../../../.storybook/categories';

const options = [{
  label: "São Paulo - SP",
  value: "SP",
},
{
  label: "Rio de Janeiro - RJ",
  value: "RJ",
},
{
  label: "Nenhuma das anteriores",
  value: "NA",
}
]

export const MultipleSelectStory = () => {
  return (
    <div style={{ width: '218px' }}>
      <Select
        options={options}
        defaultSelectValue={options[3]}
      />
    </div>

  )
}

export default {
  title: categories.Selects,
  name: 'Select',
  component: MultipleSelectStory,
  decorators: [
    withKnobs,
    withA11y,
    (story) => <ThemeProvider>{story()}</ThemeProvider>,
    (story) => <div style={{ display: "flex" }}>{story()}</div>,
  ],
}
