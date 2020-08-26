import React, { useState } from 'react'
import PropTypes from 'prop-types'

import IconManager from '../IconManager'
import Typography from '../Typography'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import * as SideMenu from './SideMenu.style'

const SideMenuComponent = ({
  buttons,
  items,
  onClickClose,
  onClickOutside
}) => {

  const renderItems = (theme) => {
    return items.map((item, index) => (
      <SideMenu.Item
        onClick={() => item.func && item.func()}
        key={index}>
        <SideMenu.ItemIcon>
          <IconManager
            fill={theme.colors.primaryColor}
            icon={item.icon}
            width="22px"
          />
        </SideMenu.ItemIcon>
        <SideMenu.ItemText>
          <Typography
            color={theme.colors.primaryColor}
            fontSize="18px"
            fontWeight="bolder">
            {item.text}
          </Typography>
        </SideMenu.ItemText>
      </SideMenu.Item>
    ))
  }

  const renderComponent = (theme) => (
    <SideMenu.Wrapper
      className="SideMenu">
      <SideMenu.Background
        className="SideMenu__Background"/>
      <SideMenu.Menu
        className="SideMenu__Menu">
        <SideMenu.Close
          className="SideMenu__CloseWrapper">
          <SideMenu.CloseIcon
            className="SideMenu__Close"
            onClick={onClickClose}>
            <IconManager
              fill={theme.colors.blackColor}
              icon="Close"
              width="25px"
            />
          </SideMenu.CloseIcon>
        </SideMenu.Close>
        <SideMenu.MenuItems>
          {renderItems(theme)}
        </SideMenu.MenuItems>
        <SideMenu.MenuButtons>
            
        </SideMenu.MenuButtons>
      </SideMenu.Menu>
    </SideMenu.Wrapper>
  )

  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

SideMenuComponent.propTypes = {
  buttons: PropTypes.array,
  items: PropTypes.array,
  onClickClose: PropTypes.func,
  onClickOutside: PropTypes.func
}

export default SideMenuComponent
