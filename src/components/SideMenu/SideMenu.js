import React, { useState } from 'react'
import PropTypes from 'prop-types'

import IconManager from '../IconManager'
import Typography from '../Typography'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import * as SideMenu from './SideMenu.style'
import Button from '../Button'

const SideMenuComponent = ({
  buttons,
  items,
  onClickClose,
  onClickOutside,
  terms
}) => {

  const renderItems = (theme) => {
    return items ? 
      items.map((item, index) => (
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
      )) : null
  }

  const renderButtons = (theme) => {
    return buttons ? 
      buttons.map((button, index) => (
        <SideMenu.Button
          key={index}>
          <SideMenu.ButtonWrapper>
            <Button
              onButtonClick={() => button.func && button.func()}
              backgroundColor={theme.colors.whiteColor}
              borderColor={theme.colors.primaryColor}
              hoverColor={theme.colors.whiteColor}
              id={`${index}-menu-button`}
              name={`${index}-menu-button`}>
              <Typography
                color={theme.colors.primaryColor}
                fontSize="18px"
                fontWeight="bolder">
                {button.text}
              </Typography>
            </Button>
          </SideMenu.ButtonWrapper>
        </SideMenu.Button>
      )) : null
  }

  const renderComponent = (theme) => (
    <SideMenu.Wrapper
      className="SideMenu">
      <SideMenu.Background
        className="SideMenu__Background"
        onClick={onClickOutside}/>
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
          {renderButtons(theme)}
        </SideMenu.MenuButtons>
        {
          terms && (
            <SideMenu.Terms
              onClick={terms.func}>
              <Typography
                isUnderlined>
                {terms.text}
              </Typography>
            </SideMenu.Terms>
          )
        }
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
  onClickOutside: PropTypes.func,
  terms: PropTypes.object
}

export default SideMenuComponent
