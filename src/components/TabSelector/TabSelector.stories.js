import React from 'react'
import categories from '../../../.storybook/categories'
import TabSelector from './TabSelector'
import { ThemeProvider } from "../../../src";

export const tabselector = () => {
  return (
    <TabSelector />
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
