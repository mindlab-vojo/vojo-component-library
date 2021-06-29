import React, { useEffect } from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import FormMultiSelect from '.';
import { ThemeProvider } from "../..";
import categories from '../../../.storybook/categories';
import { useState } from 'react';

const options = [{
  label: "Nenhuma das anteriores",
  value: "NDA",
},
{
  label: "São Paulo - SP",
  value: "SP",
},
{
  label: "Rio de Janeiro - RJ",
  value: "MT",
},
{
  label: "Cuiabá - MT",
  value: "MT",
},
]

const title = text('title', 'Onde você teria disponibilidade para trabalhar?')
const titleSize = text('titleSize', '14px')
const description = text('description', 'Essas são as atuais áreas de atuação da James. Se não encontrar a que deseja, selecione "Nenhuma das opções”.')
const errorMessage = text('errorMessage', 'Este campo possui algum erro...')

export const FormMultiSelectStory = () => {
  const [selected, setSelected] = useState([])

  useEffect(() => console.log(selected), [selected])

  return (
    <form style={{ maxWidth: '328px' }}>
      <FormMultiSelect
        options={options}
        title={title}
        titleSize={titleSize}
        description={description}
        errorMessage={errorMessage}
        defaultSelectValue={undefined}
        placeholder='Selecione as cidades'
        value={selected}
        setSelected={setSelected}
        onSelectChange={newVal => setSelected(newVal)}
      />
    </form>

  )
}

export default {
  title: categories.Selects,
  name: 'FormMultiSelect',
  component: FormMultiSelect,
  decorators: [
    withKnobs,
    withA11y,
    (story) => <ThemeProvider>{story()}</ThemeProvider>,
    (story) => <div style={{ display: "flex" }}>{story()}</div>,
  ],
}
