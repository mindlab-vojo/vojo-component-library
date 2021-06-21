import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import FormMultiSelect from '.';
import { ThemeProvider } from "../..";
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

const title = text('title', 'Título da Pergunta')
const titleSize = text('titleSize', '14px')
const titleMargin = text('titleMargin', '0 0 4px 0')
const hasError = boolean('hasError', true)
const description = text('description', 'Breve descrição da pergunta')
const errorMessage = text('errorMessage', 'Este campo possui algum erro...')

export const formMultiSelect = () => {
  return (
    <div style={{ width: '218px' }}>
      <FormMultiSelect
        options={options}
        title={title}
        titleSize={titleSize}
        titleMargin={titleMargin}
        hasError={hasError}
        description={description}
        errorMessage={errorMessage}
        defaultSelectValue={options[3]}/>
    </div>

  )
}

export default {
  title: categories.Selects,
  name: 'FormMultiSelect',
  component: formMultiSelect,
  decorators: [
    withKnobs,
    withA11y,
    (story) => <ThemeProvider>{story()}</ThemeProvider>,
    (story) => <div style={{ display: "flex" }}>{story()}</div>,
  ],
}
