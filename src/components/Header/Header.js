import React, { useState } from 'react'
import PropTypes from 'prop-types'

import * as Header from './Header.style'

import Logo from './../Logo'
import SideMenu from '../SideMenu'
import IconManager from '../IconManager'
import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'

const HeaderComponent = ({
  menuButtons,
  menuItems,
  menuTems,
  onClickLogo,
  goBack,
  onClickGoBack
}) => {

  const [showMenu, setShowMenu] = useState(false)

  const handleToogleMenu = () => {
    setShowMenu(!showMenu)
  }

  const renderComponent = (theme) => (
    <>
      <Header.Wrapper
        theme={theme}>
        <Header.Content
          theme={theme}>
          <Header.BlockClickable
            onClick={goBack ? onClickGoBack : handleToogleMenu}>
            {goBack ? <IconManager
              fill={theme.colors.whiteColor}
              icon="ArrowLeft"
              width="40px"
              height="40px" /> : <IconManager
              fill={theme.colors.whiteColor}
              icon="Hamburger"
              width="24px"
              height="24px" />}
          </Header.BlockClickable>
          <Header.BlockClickable
            onClick={onClickLogo}>
            <Logo height="16px" width="150px" isReverse />
          </Header.BlockClickable>
          <Header.Block/>
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
  menuButtons: PropTypes.array,
  menuItems: PropTypes.array,
  menuTems: PropTypes.object,
  onClickLogo: PropTypes.func,
  goBack: PropTypes.bool,
  onClickGoBack: PropTypes.func
}

export default HeaderComponent

