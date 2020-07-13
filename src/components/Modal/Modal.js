import React from 'react'
import PropTypes from 'prop-types'

import * as Modal from './Modal.style'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import Logo from '../Logo'
import Typography from '../Typography'

function ModalComponent({ 
  cardWidth,
  children, 
  zIndex 
}) {

  const renderComponent = (theme) => (
    <Modal.Background 
      className="Modal"
      zIndex={zIndex}>
      <Modal.Card
        cardWidth={cardWidth}
        theme={theme}>
        {children}
      </Modal.Card>
    </Modal.Background>
  )

  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

ModalComponent.propTypes ={
  children: PropTypes.any,
  zIndex: PropTypes.number
}

ModalComponent.defaultProps ={
  zIndex: 3000
}

export default ModalComponent

