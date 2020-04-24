import React from 'react'
import PropTypes from 'prop-types'

import * as Container from './Container.style'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'

function ContainerComponent({ 
  children, 
  maxWidth,
}) {
  const renderComponent = (theme) => (
    <Container.Container 
      className="Container"
      maxWidth={maxWidth}
      theme={theme}>
      {children}
    </Container.Container>
  )
  
  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

ContainerComponent.propTypes = {
  children: PropTypes.node,
  maxWidth: PropTypes.oneOf([
    'desktop',
    'full',
    'mobile'
  ])
}

export default ContainerComponent

