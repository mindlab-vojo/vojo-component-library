import React from 'react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import Modal from '.'; 
import Typography from '../Typography';

import { ThemeProvider } from "../../../src";
import categories from '../../../.storybook/categories';

export const modal = () => {
  
  const cardWidth = text('cardWidth', "380px")
  const zIndex = number('zIndex', 3000)

  return (
    <Modal
      cardWidth={cardWidth}
      zIndex={zIndex}>
      <Typography fontWeight="bolder">
          Título do Modal
      </Typography>
      <Typography>
          Este é o exemplo de como um modal é representado no sistema. É bem simples, e a ideia é que ele fique sobre qualquer elemento da view, independente de onde seja inserido.
      </Typography>
      <Typography>
          O conteúdo do Modal é passado como children para o componente, podendo assim ser construído de acordo com a necessidade da aplicação na qual está inserida.
      </Typography>
    </Modal>
  )
}

export default {
  title: categories.Modals,
  name: 'Modal',
  component: modal,
  decorators: [
    withKnobs, 
    withA11y, 
    (story) => <ThemeProvider>{ story() }</ThemeProvider>,
    (story) => <div style={{ display: "flex" }}>{ story() }</div>,
  ],
}
  