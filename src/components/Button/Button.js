import React from 'react'
import PropTypes from 'prop-types'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import * as Button from './Button.style'

function ButtonComponent({ 
  children, 
  id,
  name,
  form,
  onButtonClick, 
  type
}) {

  const renderComponent = (theme) => (
    <Button.Button
      className="Button"
      id={id}
      name={name}
      form={form}
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
  id: PropTypes.string,
  name: PropTypes.string,
  form: PropTypes.string,
  onButtonClick: PropTypes.func, 
  type: PropTypes.string
}

ButtonComponent.defaultProps = {
  type: 'button'
}

export default ButtonComponent

