import React from 'react'

import * as Header from './Header.style'

import Logo from './../Logo'
import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'

function HeaderComponent() {
  const renderComponent = (theme) => (
    <Header.Wrapper 
      className="Header__Wrapper"
      theme={theme}>
      <Header.Content 
        className="Header__Content"
        theme={theme}>
        <Logo height="16px" isReverse/>
      </Header.Content>
    </Header.Wrapper>
  )

  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

export default HeaderComponent

