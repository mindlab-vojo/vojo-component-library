import React from 'react'
import categories from '../../../.storybook/categories'
import TabSelector from './TabSelector'
import { ThemeProvider } from "../../../src";
import Container from '../Container';

export const tabselector = () => {
  return (
    <Container maxWidth="desktop">
      <TabSelector />
    </Container>
  )
}

export default {
  title: categories.Tabs,
  component: tabselector,
  decorators: [story => <ThemeProvider>{ story() }</ThemeProvider>]
}

tabselector.story = {
  name: 'TabSelector'
}
