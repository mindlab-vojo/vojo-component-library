import React from 'react'
import categories from '../../../.storybook/categories'
import TabSelector from './TabSelector'
import { withKnobs, object } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { ThemeProvider } from "../../../src";
import Container from '../Container';
import { action } from '@storybook/addon-actions'

export const tabselector = () => {
  const tabs = object('Tabs', [{ 
    id: 1,
    title: 'Dados de Login', 
    active: true 
  }, { 
    id: 2,
    title: 'Dados Pessoais', 
    active: false 
  }])
  const setCurrentTab = action('Clicked')

  return (
    <Container maxWidth="desktop">
      <TabSelector 
        tabs={ tabs }
        setCurrentTab={ setCurrentTab }
      />
    </Container>
  )
}

export default {
  title: categories.Tabs,
  component: tabselector,
  decorators: [withKnobs, withA11y, story => <ThemeProvider>{ story() }</ThemeProvider>]
}

tabselector.story = {
  name: 'TabSelector'
}
