import React from 'react'
import PropTypes from 'prop-types'

import * as Button from './Button.style'

function ButtonComponent({ children, onButtonClick, type }) {
  return (
    <Button.Button
      onClick={onButtonClick}  
      type={type}>
      {children}
    </Button.Button>
  )
}

ButtonComponent.propTypes = {
  children: PropTypes.node, 
  onButtonClick: PropTypes.func, 
  type: PropTypes.string
}

export default ButtonComponent

