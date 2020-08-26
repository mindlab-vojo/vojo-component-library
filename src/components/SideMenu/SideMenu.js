import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Typography from '../Typography'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import * as SideMenu from './SideMenu.style'

const SideMenuComponent = ({
  items,
  onClickClose,
  onClickOutside
}) => {

  const renderComponent = (theme) => (
    <>
    
    </>
  )

  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

SideMenuComponent.propTypes = {
}

export default SideMenuComponent
