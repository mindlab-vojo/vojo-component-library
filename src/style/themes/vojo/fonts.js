import React from 'react'
import { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet'

const GlobalImportFont = () => (
  <Helmet>
    <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
  </Helmet>
)

const GlobalSetFont = createGlobalStyle`
  html {
    font-family: 'Rubik', sans-serif;
  }
`

const GlobalFonts = () => (
  <>
    <GlobalImportFont />
    <GlobalSetFont />
  </>
)

export default GlobalFonts