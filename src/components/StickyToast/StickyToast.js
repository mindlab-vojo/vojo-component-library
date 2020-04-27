import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Sticky from 'react-sticky-el'

import * as StickyToast from './StickyToast.style'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import IconManager from '../IconManager'

const StickyToastComponent = ({
  children,
  onClickClose,
  show,
}) => {

  const [showToast, setShowToast] = useState(show ? true : false)

  const handleCloseButton = () => {
    setShowToast(false)
    onClickClose && onClickClose(false)
  }

  const renderComponent = theme => (
    <Sticky>
      <StickyToast.Wrapper 
        className="StickyToast"
        theme={theme}>
        <StickyToast.Content 
          className="StickyToast__Content">
          {children}
        </StickyToast.Content>
        <StickyToast.Close 
          onClick={()=>handleCloseButton()}
          className="StickyToast__Close">
          <IconManager width="17" icon="Close"/>
        </StickyToast.Close>
      </StickyToast.Wrapper>
    </Sticky>
  )  

  return showToast ? (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  ) : null
}

StickyToastComponent.propTypes = {
  children: PropTypes.node,
  onClickClose: PropTypes.func,
  show: PropTypes.bool,
}

export default StickyToastComponent
