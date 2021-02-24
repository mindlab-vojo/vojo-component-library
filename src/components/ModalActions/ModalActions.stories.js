import React from 'react';
import { withKnobs, text, array, boolean } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import ModalActions from '.';

import { ThemeProvider } from "../../../src";
import categories from '../../../.storybook/categories';
import Button from '../Button'
export const modalActions = () => {
  const modalWidth = text('modalWidth', "280px")
  const title = text('title', "Aceitar CANDIDATOS?")
  const description = text('description', "Ao aceitar você automaticamente aprova os candidatos selecionados pela nossa equipe.")
  const textAlign = text('textAlign', "center")

  const renderActions = () => {
    return <Button>OK!</Button>
  }
  return (
    <ModalActions
      modalWidth={modalWidth}
      textAlign={textAlign}
      title={title}
      description={description}
      actions={renderActions()}
    >
    </ModalActions>
  )
}

export default {
  title: categories.Modals,
  name: 'ModalActions',
  component: modalActions,
  decorators: [
    withKnobs,
    withA11y,
    (story) => <ThemeProvider>{story()}</ThemeProvider>,
    (story) => <div style={{ display: "flex" }}>{story()}</div>,
  ],
}
