import React, { useState } from 'react'
import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import * as TabSelector from './TabSelector.style'

const TabSelectorComponent = () => {
  const [ tabs, setTabs ] = useState([{ 
    title: 'Dados de Login', 
    active: true 
  }, { 
    title: 'Dados Pessoais', 
    active: false 
  }])

  const setThisTabAsActive = index => {
    const newTabsState = []

    tabs.forEach((tab, key) => {
      key === index ? newTabsState.push({ ...tab, active: true }) : newTabsState.push({ ...tab, active: false }) 
    })

    setTabs(newTabsState)
  }

  const renderComponent = theme => {
    return (
      <TabSelector.Wrapper theme={ theme }>
        {
          tabs.map((tab, index) => {
            return tab.active ?
              <TabSelector.ActiveTab 
                theme={ theme } 
                key={ index }
                onClick={ () => setThisTabAsActive(index) }
              >{ tab.title }</TabSelector.ActiveTab>
              :
              <TabSelector.InactiveTab 
                theme={ theme } 
                key={ index }
                onClick={ () => setThisTabAsActive(index) }
              >{ tab.title }</TabSelector.InactiveTab>
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
