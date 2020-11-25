import React from 'react'
import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import * as TabSelector from './TabSelector.style'

const TabSelectorComponent = () => {
  const tabs = [{ title: 'Dados de Login', active: true }, { title: 'Dados Pessoais', active: false }]

  const renderComponent = theme => {
    return (
      <TabSelector.Wrapper theme={ theme }>
        {
          tabs.map((tab, index) => {
            return tab.active ?
              <TabSelector.ActiveTab theme={ theme } key={ index }>{ tab.title }</TabSelector.ActiveTab>
              :
              <TabSelector.InactiveTab theme={ theme } key={ index }>{ tab.title }</TabSelector.InactiveTab>
          })
        }
      </TabSelector.Wrapper>
    )
  }

  return (
    <ThemeConsumer>
      { ({ theme }) => renderComponent(theme) }
    </ThemeConsumer>
  )
}



export default TabSelectorComponent
