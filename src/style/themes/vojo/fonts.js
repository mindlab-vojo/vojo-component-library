import React from 'react'
import { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet'

const GlobalImportFont = () => (
  <Helmet>
    <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet"></link>
  </Helmet>
)

const GlobalSetFont = createGlobalStyle`
  html {
    font-family: 'Lato', sans-serif;
  }
`

const GlobalFonts = () => (
  <>
    <GlobalImportFont/>
    <GlobalSetFont/>
  </>
)

export default GlobalFonts