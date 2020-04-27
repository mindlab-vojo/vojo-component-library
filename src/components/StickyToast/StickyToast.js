import React from 'react'
import PropTypes from 'prop-types'
import Sticky from 'react-sticky-el'

import * as StickyToast from './StickyToast.style'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import IconManager from '../IconManager'

const StickyToastComponent = ({
  children,
  show,
}) => {
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
          className="StickyToast__Close">
          <IconManager width="24" icon="ArrowLeft"/>
        </StickyToast.Close>
      </StickyToast.Wrapper>
    </Sticky>
  )  

  return show ? (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  ) : null
}

StickyToastComponent.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool,
}

export default StickyToastComponent
