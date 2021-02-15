import React from 'react'
import PropTypes from 'prop-types'

import * as Footer from './Footer.style'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import Logo from '../Logo'
import Typography from '../Typography'
import IconManager from '../IconManager'

function FooterComponent({ termsUrl, privacyUrl }) {

  const actualYear = new Date().getFullYear()
  const linkAdditionalProps = { href: termsUrl, target: "_blank" }

  const renderComponent = (theme) => (
    <Footer.Container theme={theme}>
      <Footer.Content theme={theme}>
        <Footer.Social theme={theme}>
          <Typography color={'white'}>Siga o Vojo nas redes sociais:</Typography>
          <Footer.Icons>
            <img onClick={() => window.open('https://www.facebook.com/vojoconecta', "_blank")} src="https://s3.amazonaws.com/static.vojo.com.br/prd/images/facebook_branco.png"></img>
            <img onClick={() => window.open('https://www.instagram.com/vojoconecta/', "_blank")} src="https://s3.amazonaws.com/static.vojo.com.br/prd/images/instagram_branco.png"></img>
          </Footer.Icons>
        </Footer.Social>
        <Footer.Center theme={theme}>
          <Footer.Terms theme={theme}>
            <Footer.Use onClick={() => window.open(termsUrl, "_blank")}  theme={theme}>Termos de uso</Footer.Use>
            <Footer.Privacy onClick={() => window.open(privacyUrl, "_blank")}  theme={theme}>Política de Privacidade</Footer.Privacy>
          </Footer.Terms>
          <Footer.Product theme={theme}>
            <Footer.ProductText>
              O VOJO é um produto da
              <Footer.Mind onClick={() => window.open('https://www.mindlab.com.br/', "_blank")}>
                Mind Lab
              </Footer.Mind>
              . Estamos localizados na Vila Mariana, em São Paulo – SP
              <Footer.Heart>
                <IconManager width={'12px'} height={'12px'} fill={theme.colors.pinkColor} icon={"Heart"} />
              </Footer.Heart>
            </Footer.ProductText>
          </Footer.Product>
        </Footer.Center>
        <Footer.Copywriting theme={theme}>
          <Footer.CopywritingText theme={theme}>
            {actualYear} – Vojo® – Todos os direitos reservados
          </Footer.CopywritingText>
          <Footer.Logo theme={theme}>
            <Logo isReverse
              height="16px"
              width="103px"
            />
          </Footer.Logo>
        </Footer.Copywriting>
      </Footer.Content>
    </Footer.Container>
  )

  {/* const renderComponent = (theme) => (
    <Footer.Wrapper 
      theme={theme}>
      <Footer.Content
        theme={theme}>
        <Footer.ContentBlock
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
  ) */}

  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

FooterComponent.propTypes = {
  termsUrl: PropTypes.string,
  privacyUrl: PropTypes.string
}

FooterComponent.defaultProps = {
  termsUrl: 'https://vojo.com.br/termos-de-uso/',
  privacyUrl: 'https://vojo.com.br/politica-de-privacidade/'
}

export default FooterComponent

