import React from 'react'
import PropTypes from 'prop-types'

import * as Footer from './Footer.style'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import Logo from '../Logo'

function FooterComponent({ termsUrl }) {

  const actualYear = new Date().getFullYear()

  const renderComponent = (theme) => (
    <Footer.Wrapper 
      className="Footer"
      theme={theme}>
      <Footer.Content>
        <Footer.LeftBlock>

        </Footer.LeftBlock>
        <Footer.RightBlock>
          <Logo isReverse
            height="16px"
          />
        </Footer.RightBlock>
      </Footer.Content>
    </Footer.Wrapper>
  )

  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

FooterComponent.propTypes ={
  termsUrl: PropTypes.string
}

export default FooterComponent

