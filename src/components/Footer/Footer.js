import React from 'react'
import PropTypes from 'prop-types'

import * as Footer from './Footer.style'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import Logo from '../Logo'
import Typography from '../Typography'

function FooterComponent({ termsUrl }) {

  const actualYear = new Date().getFullYear()

  const renderComponent = (theme) => (
    <Footer.Wrapper 
      className="Footer"
      theme={theme}>
      <Footer.Content
        className="Footer_Content">
        <Footer.ContentBlock
          className="Footer_Content__Block">
          <Typography
            additionalProps={{ href: { termsUrl } }}
            color={theme.colors.whiteColor}
            tag="a"
            type="default"
            isUnderlined>
            Termos de uso
          </Typography>
        </Footer.ContentBlock>
        <Footer.ContentBlock
          className="Footer_Content__Block">
          <Typography
            color={theme.colors.whiteColor}
            tag="p"
            type="default">
            {actualYear} – Vojo® – Todos os direitos reservados | 
          </Typography>
          <Logo isReverse
            height="16px"
            width="103px"
          />
        </Footer.ContentBlock>
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

