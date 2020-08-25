import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import Toast from '.'; 
import { ThemeProvider } from "../../../src";
import categories from '../../../.storybook/categories';

import Container from '../Container';

export const toast = () => {  

  const types = [
    'error',
    'warn'
  ]

  const title = text('title', 'Formulário de inscrição')
  const type = select('type', types, types[0])
  const description = text('description', (
    `- Como esta oportunidade necessita de um veículo, é preciso que você tenha uma CNH válida para exercer a função.
    - Algumas empresas priorizam usuários com MEI. Portanto se você quiser abrir um MEI e aumentar as suas chances acesse: www.vojo.app/mei. Depois volte para o site do VOJO e atualize o seu cadastro. 
    - Como esta oportunidade envolve o uso de um aplicativo, é importante que você tenha um smartphone com internet para conseguir atender e se comunicar com os clientes.`
  ))

  const descriptionToComponent = () => {
    const splitDescription = description.split('-')
    splitDescription.shift()
    return (
      splitDescription.map((description, index) => (
        <>
          <span key={index}>- {description}</span><br/>
        </>
      ))
    )
  }

  return (
    <Container maxWidth="desktop">
      <Toast 
        description={descriptionToComponent()}
        title={title}
        type={type}/>
    </Container>
  )
}

export default {
  title: categories.Toasts,
  component: toast,
  decorators: [withKnobs, withA11y, (story) => <ThemeProvider>{ story() }</ThemeProvider>]
}

toast.story = {
  name: 'Toast',
};
  