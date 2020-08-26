import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions'

import SideMenu from '.'; 
import { ThemeProvider } from "../../../src";
import categories from '../../../.storybook/categories';

export const sideMenu = () => {  
  const menuButtons = [
    {
      text: 'Sair',
      func: () => console.log('click')
    },
  ]

  const menuItems = [
    {
      icon: 'Check',
      text: 'Oportunidades',
      func: () => console.log('click')
    },
    {
      icon: 'Check',
      text: 'Cursos Gratuitos',
      func: () => console.log('click')
    },
    {
      icon: 'Check',
      text: 'Candidaturas Realizadas',
      func: () => console.log('click')
    },
    {
      icon: 'Check',
      text: 'Página de Ajuda',
      func: () => console.log('click')
    },
    {
      icon: 'Check',
      text: 'Minha Conta',
      func: () => console.log('click')
    },
  ]

  const buttons = object('buttons', menuButtons)
  const items = object('items', menuItems)
  const onClickClose = action('onClickClose')
  const onClickOutside = action('onClickOutside')

  return (
    <SideMenu
      buttons={buttons}
      items={items}
      onClickClose={onClickClose}
      onClickOutside={onClickOutside}
    />
  )
}

export default {
  title: categories.Headers,
  name: 'SideMenu',
  component: sideMenu,
  decorators: [
    withKnobs, 
    withA11y, 
    (story) => <ThemeProvider>{ story() }</ThemeProvider>,
    (story) => <div style={{ display: "flex" }}>{ story() }</div>,
  ],
}
  