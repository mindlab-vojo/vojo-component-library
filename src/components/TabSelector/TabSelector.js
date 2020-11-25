import React from 'react'
import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import * as TabSelector from './TabSelector.style'

const TabSelectorComponent = () => {

  const renderComponent = theme => {
    return (
      <TabSelector.Wrapper theme={ theme }>
        <p>teste</p>
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
