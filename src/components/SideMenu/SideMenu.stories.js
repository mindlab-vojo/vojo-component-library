import React from 'react';
import { withKnobs, object, number, boolean } from '@storybook/addon-knobs';
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

  const animationDuration = number('animationDuration', 0.3)
  const buttons = object('buttons', menuButtons)
  const items = object('items', menuItems)
  const onClickClose = action('onClickClose')
  const onClickOutside = action('onClickOutside')
  const show = boolean('show', false)
  const terms = object('terms', termsObject)

  return (
    <SideMenu
      animationDuration={animationDuration}
      buttons={buttons}
      items={items}
      onClickClose={onClickClose}
      onClickOutside={onClickOutside}
      show={show}
      terms={terms}
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
  