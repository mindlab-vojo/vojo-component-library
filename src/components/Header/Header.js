import React, { useState } from 'react'
import PropTypes from 'prop-types'

import * as Header from './Header.style'

import Logo from './../Logo'
import SideMenu from '../SideMenu'
import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import IconManager from '../IconManager'

const  HeaderComponent = ({
  menuButtons,
  menuItems,
  menuTems,
  onClickLogo
}) => {

  const [showMenu, setShowMenu] = useState(false)

  const handleToogleMenu = () => {
    setShowMenu(!showMenu)
  }

  const renderComponent = (theme) => (
    <>
      <Header.Wrapper 
        className="Header__Wrapper"
        theme={theme}>
        <Header.Content 
          className="Header__Content"
          theme={theme}>
          <Header.BlockClickable
            className="Header__Block"
            onClick={handleToogleMenu}>
            <IconManager 
              fill={theme.colors.whiteColor}
              icon="Check"
              height="24px"/>
          </Header.BlockClickable>
          <Header.BlockClickable
            className="Header__Block"
            onClick={onClickLogo}>
            <Logo height="16px" width="150px" isReverse/>
          </Header.BlockClickable>
          <Header.Block
            className="Header__Block"/>
        </Header.Content>
      </Header.Wrapper>
      {
        showMenu && (
          <SideMenu
            animationDuration={0.3}
            buttons={menuButtons}
            items={menuItems}
            onClickClose={handleToogleMenu}
            onClickOutside={handleToogleMenu}
            show={showMenu}
            terms={menuTems}
          />
        )
      }
    </>
  )

  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

HeaderComponent.propTypes = {
  menuButtons: PropTypes.object,
  menuItems: PropTypes.object,
  menuTems: PropTypes.object,
  onClickLogo: PropTypes.func
}

export default HeaderComponent

