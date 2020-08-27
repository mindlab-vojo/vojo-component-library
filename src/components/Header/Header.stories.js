import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions'

import Header from '.';
import categories from '../../../.storybook/categories';
import { ThemeProvider } from "../../../src";

export const header = () => {
  const menuButtons = [
    {
      text: 'Sair',
      func: () => console.log('click')
    },
  ]
  
  const menuItems = [
    {
      icon: 'Suitcase',
      text: 'Oportunidades',
      func: () => console.log('click')
    },
    {
      icon: 'Course',
      text: 'Cursos Gratuitos',
      func: () => console.log('click')
    },
    {
      icon: 'SuitcaseArrow',
      text: 'Candidaturas Realizadas',
      func: () => console.log('click')
    },
    {
      icon: 'Question',
      text: 'Página de Ajuda',
      func: () => console.log('click')
    },
    {
      icon: 'Avatar',
      text: 'Minha Conta',
      func: () => console.log('click')
    },
  ]
  
  const termsObject = {
    text: 'termos de uso e política de privacidade',
    func: () => console.log('click')
  }
  
  const buttons = object('menuButtons', menuButtons)
  const items = object('menuItems', menuItems)
  const onClickLogo = action('onClickLogo')
  const tems = object('menuTems', termsObject)

  return (
    <Header
      menuButtons={buttons}
      menuItems={items}
      onClickLogo={onClickLogo}
      menuTems={tems}
    />
  )
}

header.story = {
  name: 'Header',
};

export default {
  title: categories.Headers,
  component: header,
  decorators: [withKnobs, withA11y, (story) => <ThemeProvider>{ story() }</ThemeProvider>]
}
  