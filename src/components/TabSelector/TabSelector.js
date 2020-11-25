import React, { useState } from 'react'
import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import * as TabSelector from './TabSelector.style'
import PropTypes from 'prop-types'

const TabSelectorComponent = ({ tabs }) => {
  const [ listOfTabs, setListOfTabs ] = useState(tabs)

  const setThisTabAsActive = index => {
    const newTabsState = []

    listOfTabs.forEach((tab, key) => {
      key === index ? newTabsState.push({ ...tab, active: true }) : newTabsState.push({ ...tab, active: false }) 
    })

    setListOfTabs(newTabsState)
  }

  const renderComponent = theme => {
    return (
      <TabSelector.Wrapper theme={ theme }>
        {
          listOfTabs.map((tab, index) => {
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


TabSelectorComponent.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    active: PropTypes.bool
  }))
}


export default TabSelectorComponent
