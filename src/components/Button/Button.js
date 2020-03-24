import React from 'react'
import PropTypes from 'prop-types'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import * as Button from './Button.style'

function ButtonComponent({ children, onButtonClick, type }) {

  const renderComponent = (theme) => (
    <Button.Button
      onClick={onButtonClick}
      theme={theme}
      type={type}>
      {children}
    </Button.Button>
  )

  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

ButtonComponent.propTypes = {
  children: PropTypes.node, 
  onButtonClick: PropTypes.func, 
  type: PropTypes.string
}

export default ButtonComponent

