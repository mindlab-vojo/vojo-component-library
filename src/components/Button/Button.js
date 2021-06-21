import React from 'react'
import PropTypes from 'prop-types'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import * as Button from './Button.style'

function ButtonComponent({ 
  children, 
  backgroundColor,
  borderColor,
  retangular,
  hoverColor,
  id,
  name,
  form,
  onButtonClick, 
  textColor,
  type,
  letterSpacing,
  padding,
  width,
  height
}) {

  const renderComponent = (theme) => (
    <Button.Button
      className="Button"
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      retangular={retangular}
      hoverColor={hoverColor}
      id={id}
      name={name}
      form={form}
      onClick={onButtonClick}
      theme={theme}
      textColor={textColor}
      type={type}
      padding={padding}
      letterSpacing={letterSpacing}
      width={width}
      height={height}
    >
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
  borderColor: PropTypes.string,
  retangular: PropTypes.bool,
  children: PropTypes.node, 
  hoverColor: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  form: PropTypes.string,
  onButtonClick: PropTypes.func, 
  textColor: PropTypes.string,
  type: PropTypes.string,
  padding: PropTypes.string,
  letterSpacing: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
}

ButtonComponent.defaultProps = {
  backgroundColor: "#391DDD",
  hoverColor: "#2f17b5",
  textColor: "#FFFFFF",
  type: 'button',
  padding: '10px 25px',
  width: '100%'
}

export default ButtonComponent
