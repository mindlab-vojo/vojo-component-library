import React from 'react';
import { withKnobs, text, select, boolean, number } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions'

import Select from '.';
import { ThemeProvider } from "../../../src";
import categories from '../../../.storybook/categories';

const options = [{
  label: "Sem ",
  value: "NDA",
},
{
  label: "Ensino",
  value: "EFI",
},
{
  label: "Ensino",
  value: "EFC",
},
{
  label: "Ensino EMI",
  value: "EMI",
},]
const list = {
  Filled: 'Filled',
  Outlined: 'Outlined',
  Standard: 'Standard'
}
const inputLabel = text('inputLabel', 'Grau')
const variant = select('variant', list)
const defaultValue = text('defaultValue', 'EMI')

export const selectStorie = () => {
  return (
    <div style={{ width: '100%' }}>
      <Select
        options={options}
        inputLabel={inputLabel}
        defaultValue={defaultValue}
        value={''}
        variant={'outlined'} />
    </div>

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
