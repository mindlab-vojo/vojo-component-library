import React from 'react'
import PropTypes from 'prop-types'

import * as Toast from './Toast.style'

import Typography from '../Typography'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'

const ToastComponent = ({
  description,
  title,
  type,
}) => {
  const textColor = (theme) => {
    const textTypes = {
      error: theme.colors.redColor,
      warn: theme.colors.blackColor
    }
    return textTypes[type]
  }

  const renderComponent = (theme) => (
    <Toast.Wrapper
      type={type}
      theme={theme}>
      <Toast.Content>
        <Toast.Title>
          <Typography
            color={textColor(theme)}
            fontSize="12px"
            fontWeight="bolder">
            {title}
          </Typography>
        </Toast.Title>
        <Toast.Description>
          <Typography
            color={textColor(theme)}
            fontSize="12px">
            {description}
          </Typography>
        </Toast.Description>
      </Toast.Content>
    </Toast.Wrapper>
  )
  
  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

ToastComponent.propTypes = {
  description: PropTypes.node,
  title: PropTypes.string,
  type: PropTypes.oneOf([
    'error',
    'warn'
  ]),
}

ToastComponent.defaultProps = {
  type: 'error'
}

export default ToastComponent
