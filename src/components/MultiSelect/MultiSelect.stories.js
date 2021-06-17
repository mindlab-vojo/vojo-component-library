import React from 'react';
import { withKnobs, text, select, boolean, number } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions'

import MultiSelect from '.';
import { ThemeProvider } from "../../../src";
import categories from '../../../.storybook/categories';

const options = [
  {
    label: "São Paulo - SP",
    value: "SP",
  },
  {
    label: "Rio de Janeiro - RJ",
    value: "RJ",
  },
  {
    label: "Nenhuma das opções",
    value: "NA",
  }
]


export const multiSelectStory = () => {


  const onClick = e => {
    const formData = document.querySelector(`form`)
    e.preventDefault()
    console.log(formData)
  }

  return (
    <form style={{ width: '218px' }} >
      <MultiSelect
        options={options}
        defaultSelectValue={options[3]}/>
      <button onClick={onClick}>submit!</button>
    </form>

  )
}

export default {
  title: categories.Selects,
  name: 'MultiSelect',
  component: multiSelectStory,
  decorators: [
    withKnobs,
    withA11y,
    (story) => <ThemeProvider>{story()}</ThemeProvider>,
    (story) => <div style={{ display: "flex" }}>{story()}</div>,
  ],
}
