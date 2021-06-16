import React from 'react';
import { withKnobs, text, select, boolean, number } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions'

import MultiSelect from '.';
import { ThemeProvider } from "../../../src";
import categories from '../../../.storybook/categories';

const options = [{
  label: "Sem instrução",
  value: "NDA",
},
{
  label: "Ensino fundamental incompleto ou equivalente",
  value: "EFI",
},
{
  label: "Ensino fundamental completo ou equivalente",
  value: "EFC",
},
{
  label: "Ensino médio incompleto ou equivalente",
  value: "EMI",
},
{
  label: "Ensino médio completo ou equivalente",
  value: "EMC",
},
{
  label: "Ensino técnico incompleto ou equivalente",
  value: "ETI",
},
{
  label: "Ensino técnico completo ou equivalente",
  value: "ETC",
},]


export const multiSelectStory = () => {
  return (
    <div style={{ width: '218px' }}>
      <MultiSelect
        options={options}
        defaultSelectValue={options[3]}/>
    </div>

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
