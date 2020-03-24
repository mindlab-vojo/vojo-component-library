import React from 'react'
import PropTypes from 'prop-types'

import * as Footer from './Footer.style'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import Logo from '../Logo'
import Typography from '../Typography'

function FooterComponent({ termsUrl }) {

  const actualYear = new Date().getFullYear()
  const linkAdditionalProps = { href: termsUrl, target: "_blank" }

  const renderComponent = (theme) => (
    <Footer.Wrapper 
      className="Footer"
      theme={theme}>
      <Footer.Content
        className="Footer_Content"
        theme={theme}>
        <Footer.ContentBlock
          className="Footer_Content__Block"
          theme={theme}>
          <Typography
            additionalProps={linkAdditionalProps}
            color={theme.colors.whiteColor}
            tag="a"
            type="default"
            isUnderlined>
            Termos de uso
          </Typography>
        </Footer.ContentBlock>
        <Footer.ContentBlock
          className="Footer_Content__Block"
          theme={theme}>
          <Typography
            color={theme.colors.whiteColor}
            tag="p"
            type="default">
            {actualYear} – Vojo® – Todos os direitos reservados 
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

