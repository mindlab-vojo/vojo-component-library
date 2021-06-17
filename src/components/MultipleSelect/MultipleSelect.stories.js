import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import Select from '.';
import { ThemeProvider } from "../..";
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
  const [selected, setSelected] = React.useState([]);

  const onSelectChange = selectedOptions => {
    if (selectedOptions?.length > 2 ) {
      // error handling
      return
    }
    setSelected(selectedOptions)
  }

  const selectProps = { 
    value: selected, 
    defaultSelectValue: options[3], 
    options, onSelectChange, setSelected 
  }

  return (
    <div style={{ width: '600px' }}>
      <Select {...selectProps}/>
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
