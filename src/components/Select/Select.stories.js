import React from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions'

import Select from '.';
import { ThemeProvider } from "../../../src";
import categories from '../../../.storybook/categories';

const options = [{
  value: 1,
  description: "Sem ",
  code: "NDA",
},
{
  value: 2,
  description: "Ensino",
  code: "EFI",
}, 
{
  value: 3,
  description: "Ensino",
  code: "EFC",
}, 
{
  value: 4,
  description: "Ensino",
  code: "EMI",
},]
const list = {
  Filled: 'Filled',
  Outlined: 'Outlined',
  Standard: 'Standard'
}
const inputLabel = text('inputLabel', 'Grau')
const variant = select('variant',  list)

export const selectStorie = () => {
  return (
    <Select 
      options={options}
      inputLabel={inputLabel} 
      value={'value'}
      variant={variant}/>
  )
}

export default {
  title: categories.Selects,
  name: 'Select',
  component: selectStorie,
  decorators: [
    withKnobs,
    withA11y,
    (story) => <ThemeProvider>{story()}</ThemeProvider>,
    (story) => <div style={{ display: "flex" }}>{story()}</div>,
  ],
}
