import React, { useState } from 'react'
import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import * as TabSelector from './TabSelector.style'
import PropTypes from 'prop-types'

const TabSelectorComponent = ({ tabs, setCurrentTab }) => {
  const [ listOfTabs, setListOfTabs ] = useState(tabs)

  const setThisTabAsActive = id => {
    const newTabsState = []

    listOfTabs.forEach(tab => {
      tab.id === id ? newTabsState.push({ ...tab, active: true }) : newTabsState.push({ ...tab, active: false }) 
    })

    setCurrentTab(id)
    setListOfTabs(newTabsState)
  }

  const renderComponent = theme => {
    return (
      <TabSelector.Wrapper theme={ theme }>
        {
          listOfTabs.map((tab) => {
            return tab.active ?
              <TabSelector.ActiveTab 
                theme={ theme } 
                key={ tab.id }
                onClick={ () => setThisTabAsActive(tab.id) }
              >{ tab.title }</TabSelector.ActiveTab>
              :
              <TabSelector.InactiveTab 
                theme={ theme } 
                key={ tab.id }
                onClick={ () => setThisTabAsActive(tab.id) }
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


TabSelectorComponent.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    active: PropTypes.bool
  })),
  setCurrentTab: PropTypes.func
}


export default TabSelectorComponent
