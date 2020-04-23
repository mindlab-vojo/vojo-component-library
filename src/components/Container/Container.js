import React from 'react'
import PropTypes from 'prop-types'

import * as Container from './Container.style'

function ContainerComponent({ children, maxWidth }) {
  return (
    <Container.Container maxWidth={maxWidth}>
      {children}
    </Container.Container>
  )
}

Container.propTypes = {
  children: PropTypes.node,
  maxWidth: PropTypes.oneOf([
    'desktop',
    'full',
    'mobile'
  ])
}

export default ContainerComponent

