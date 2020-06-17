import React from 'react'
import PropTypes from 'prop-types'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import * as Button from './Button.style'

function ButtonComponent({ 
  children, 
  backgroundColor,
  hoverColor,
  id,
  name,
  form,
  onButtonClick, 
  textColor,
  type
}) {

  const renderComponent = (theme) => (
    <Button.Button
      className="Button"
      backgroundColor={backgroundColor}
      hoverColor={hoverColor}
      id={id}
      name={name}
      form={form}
      onClick={onButtonClick}
      theme={theme}
      textColor={textColor}
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
  backgroundColor: PropTypes.string,
  children: PropTypes.node, 
  hoverColor: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  form: PropTypes.string,
  onButtonClick: PropTypes.func, 
  textColor: PropTypes.string,
  type: PropTypes.string
}

ButtonComponent.defaultProps = {
  backgroundColor: "#391DDD",
  hoverColor: "#2f17b5",
  textColor: "#FFFFFF",
  type: 'button'
}

export default ButtonComponent

