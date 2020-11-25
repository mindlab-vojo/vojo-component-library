import React from 'react'
import categories from '../../../.storybook/categories'
import TabSelector from './TabSelector'

export const tabselector = () => {
  return (
    <TabSelector />
  )
}

export default {
  title: categories.Tabs,
  component: tabselector
}

tabselector.story = {
  name: 'TabSelector'
}
