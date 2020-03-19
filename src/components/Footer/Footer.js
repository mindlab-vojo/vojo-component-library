import React from 'react'
import PropTypes from 'prop-types'

import * as Footer from './Footer.style'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'

function FooterComponent() {

  const actualYear = new Date().getFullYear()

  const renderComponent = (theme) => (
    <Footer.Wrapper theme={theme}>
    </Footer.Wrapper>
  )

  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

FooterComponent.propTypes = {

}

export default FooterComponent

