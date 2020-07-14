import React from 'react'
import PropTypes from 'prop-types'

import * as Modal from './Modal.style'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'

function ModalComponent({ 
  cardWidth,
  children, 
  zIndex 
}) {

  const renderComponent = (theme) => (
    <Modal.FixedWrapper
      className="Modal"
      zIndex={zIndex}>
      <Modal.Background 
        className="Modal__Background">
        <Modal.Card
          className="Modal__Card"
          cardWidth={cardWidth}
          theme={theme}>
          {children}
        </Modal.Card>
      </Modal.Background>
    </Modal.FixedWrapper>
  )

  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

ModalComponent.propTypes ={
  cardWidth: PropTypes.string,
  children: PropTypes.any,
  zIndex: PropTypes.number
}

ModalComponent.defaultProps ={
  zIndex: 3000
}

export default ModalComponent
