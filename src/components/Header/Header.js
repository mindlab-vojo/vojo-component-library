import React from 'react'

import * as Header from './Header.style'

import ThemeConsumer from '../../ThemeManager/ThemeProvider'

function HeaderComponent() {
  const renderComponent = (theme) => (
    <Header.Wrapper theme={theme}>
      <Header.Content theme={theme}>
        <p> LOL </p>
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

