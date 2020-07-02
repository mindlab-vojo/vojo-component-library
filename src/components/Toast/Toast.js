import React from 'react'
import PropTypes from 'prop-types'

import * as Toast from './Toast.style'

import Typography from '../Typography'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'

const ToastComponent = ({
  description,
  title,
}) => {
  const renderComponent = (theme) => (
    <Toast.Wrapper
      theme={theme}>
      <Toast.Content>
        <Toast.Title>
          <Typography
            color={theme.colors.redColor}
            fontSize="12px"
            fontWeight="bolder">
            {title}
          </Typography>
        </Toast.Title>
        <Toast.Description>
          <Typography
            color={theme.colors.redColor}
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
}

export default ToastComponent
