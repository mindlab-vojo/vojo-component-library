import React from 'react';
import { withKnobs, text, number, array, boolean } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import ModalInformation from '.';

import { ThemeProvider } from "../../../src";
import categories from '../../../.storybook/categories';
import Button from '../Button'
export const modalInformation = () => {
  const modalWidth = text('modalWidth', "280px")
  const title = text('title', "Como funciona?")
  const description = text('description', "O nosso propósito é te ajudar a gerar na renda, mas é você quem decide como deseja começar!")
  const list = array('list', ['Escolha a forma como você deseja gerar renda;', 'Preencha o questionário;', 'Descubra os sites das empresas parceiras que recomendamos para você;', 'Decida se você quer começar a gerar renda com a empresa e conte com a nossa ajuda, ou se desenvolva com os nossos cursos.'])
  const unorderedList = boolean('unorderedList', false)

  const renderActions = () => {
    return <Button>OK!</Button>
  }
  return (
    <ModalInformation
      modalWidth={modalWidth}
      title={title}
      description={description}
      list={list}
      unorderedList={unorderedList}
      actions={renderActions()}
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
