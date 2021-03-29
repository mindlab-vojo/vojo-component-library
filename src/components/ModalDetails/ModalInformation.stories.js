import React from 'react';
import { withKnobs, text, array, boolean } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import ModalInformation from '.';

import { ThemeProvider } from "../../../src";
import categories from '../../../.storybook/categories';
import Button from '../Button'
export const modalInformation = () => {
  const modalWidth = text('modalWidth', "280px")
  const title = text('title', "Como funciona?")
  const description = text('description', "Nosso objetivo é te ajudar a chegar na renda.")
  const list = array('list', ['Selecione uma oportunidade;',
    'Preencha o formulário com os dados solicitados;',
    'Faça o teste para traçarmos o seu perfil;',
    'Aguarde pela análise da sua candidatura;',
    'E receba o contato da empresa responsável pelo seu telefone e/ou e-mail.'])
  const unorderedList = boolean('unorderedList', false)

  return (
    <ModalInformation
      modalWidth={modalWidth}
      title={title}
      description={description}
      list={list}
      unorderedList={unorderedList}
      actions={<Button retangular={true}>OK!</Button>}
    >
    </ModalInformation>
  )
}

export default {
  title: categories.Modals,
  name: 'ModalInformation',
  component: modalInformation,
  decorators: [
    withKnobs,
    withA11y,
    (story) => <ThemeProvider>{story()}</ThemeProvider>,
    (story) => <div style={{ display: "flex" }}>{story()}</div>,
  ],
}
