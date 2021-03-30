import React from 'react';
import { withKnobs, text, array, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions'
import { withA11y } from '@storybook/addon-a11y';

import ModalDetails from '.';

import { ThemeProvider } from "../../../src";
import categories from '../../../.storybook/categories';

export const modalDetails = () => {
  const modalWidth = text('modalWidth', "280px")
  const title = text('title', "Detalhes da Base de Candidatos")
  const slug = text('slug', "ATENDIMENTO_AO_CLIENTE_JAMES_DELIVERY_29-03-2021_18:30")
  const company = text('company', "James Delivery")
  const jobRole = text('jobRole', "Entregador")
  const candidates = number('candidates', "83")
  const cities = array('cities', ["Américo Brasiliense", "Araraquara", "Barueri", "Niterói",
    "Campinas", "Carapicuíba", "Diadema", "Embu das Artes", "Embu-Guaçu", "Ferraz de Vasconcelos",
    "Franco da Rocha", "Guará", "Guarulhos", "Hortolândia", "Itanhaém", "Itapecerica da Serra",
    "Itapevi", "Itaquaquecetuba", "Mauá", "Mogi das Cruzes", "Mogi Mirim", "Osasco", "Paulínia",
    "Poá", "Santo André", "São Bernardo do Campo", "São Caetano do Sul", "São Paulo", "Sumaré",
    "Taboão da Serra", "Valinhos", "Belford Roxo", "Duque de Caxias", "Guapimirim", "Itaboraí",
    "Japeri", "Magé", "Mesquita", "Miguel Pereira", "Nilópolis", "Nova Iguaçu", "São José de Ribamar",
    "Queimados", "Rio de Janeiro", "São Gonçalo", "São João de Meriti", "Belo Horizonte", "Betim",
    "Contagem", "Ibirité", "Juiz de Fora", "Mariana", "Paracatu", "Ribeirão das Neves", "Sabará",
    "Santa Luzia", "Vespasiano", "Arapongas", "Cambé", "Curitiba", "Londrina", "Piraquara",
    "Camboriú", "Florianópolis", "Palhoça", "São Francisco do Sul", "São José", "Abreu e Lima",
    "Jaboatão dos Guararapes", "Olinda", "Recife", "São Lourenço da Mata", "Paço do Lumiar",
    "São Luís", "Timon", "Teresina", "Cariacica", "Serra", "Sooretama", "Viana", "Vila Velha",
    "Extremoz", "Natal", "Parnamirim", "Brasilia", "Brasília", "Biguaçu", "Aliança", "Vitória",])
  const states = array('states', ["SP", "RJ", "MG", "PR", "SC", "PE", "MA", "PI", "ES", "RN", "DF"])
  const details = array('details', [
    { label: "Smartphone", value: ["Sim, Android"] },
    { label: "Status da candidatura", value: ["Pronto"] },
    { label: "Status da avaliação", value: ["Aprovado"] },
    { label: "Maior de 18 anos?", value: "Sim" },
    { label: "Em quais período do dia tem disponibilidade para trabalhar? ", value: ["Diurno", "Noturno"] },
    { label: "Possui espaço físico adequado para desempenhar a função?", value: "Sim" },
    { label: "Possui conta bancária em seu nome?", value: "Sim" },
    { label: "CNH", value: "Sim" },
    { label: "Já fez algum curso que ajude a realizar essa função? ", value: "Sim" }, 
    { label: "CRECI", value: "Sim" },
    { label: "Grau de Escolaridade", value: ["Ensino fundamental completo ou equivalente"] },
    { label: "Possui alguma deficiência?", value: "Sim" },
    { label: "Possui experiência?", value: "Sim" },
    { label: "Gênero", value: ["Masculino", "Feminino"] },
    { label: "Possui MEI?", value: "Sim" },
    { label: "Possui PIS válido?", value: "Sim" },
    { label: "Possui comprovante de residência em seu nome?", value: "Sim" },
    { label: "Smartphone", value: ["Sim, Android"] },
    { label: "Possui ferramentas adequadas para desempenhar a função?", value: "Sim" },
    { label: "Possui disponibilidade para trabalhar final de semana?", value: "Sim" },
  ])
  const onClickClose = action('onClickClose')

  return (
    <ModalDetails
      modalWidth={modalWidth}
      title={title}
      cities={cities}
      states={states}
      details={details}
      slug={slug}
      company={company}
      jobRole={jobRole}
      candidates={candidates}
      onClickClose={onClickClose}
    >
    </ModalDetails>
  )
}

export default {
  title: categories.Modals,
  name: 'ModalDetails',
  component: modalDetails,
  decorators: [
    withKnobs,
    withA11y,
    (story) => <ThemeProvider>{story()}</ThemeProvider>,
    (story) => <div style={{ display: "flex" }}>{story()}</div>,
  ],
}
