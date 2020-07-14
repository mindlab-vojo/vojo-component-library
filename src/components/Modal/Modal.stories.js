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
      <br/>
      <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio ut sem nulla pharetra diam sit. Pellentesque elit eget gravida cum sociis natoque penatibus. Aliquet porttitor lacus luctus accumsan tortor. Nibh mauris cursus mattis molestie a iaculis at erat. Quis commodo odio aenean sed adipiscing. Adipiscing commodo elit at imperdiet dui accumsan sit. Nullam ac tortor vitae purus faucibus ornare suspendisse sed. Mauris sit amet massa vitae tortor. Enim blandit volutpat maecenas volutpat blandit. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel. Dolor morbi non arcu risus quis varius. Amet venenatis urna cursus eget nunc scelerisque viverra. Arcu non sodales neque sodales ut. Suspendisse interdum consectetur libero id faucibus nisl. Nec feugiat nisl pretium fusce id velit. Platea dictumst quisque sagittis purus. Pretium fusce id velit ut tortor pretium.
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
  