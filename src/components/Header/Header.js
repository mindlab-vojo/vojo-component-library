import React, { useState } from 'react'
import PropTypes from 'prop-types'

import * as Header from './Header.style'

import Logo from './../Logo'
import SideMenu from '../SideMenu'
import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'

const  HeaderComponent = ({
  menuButtons,
  menuItems,
  menuTems,
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
          <Logo height="16px" isReverse/>
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
}

export default HeaderComponent

