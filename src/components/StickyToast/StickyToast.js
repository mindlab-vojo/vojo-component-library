import React from 'react'
import PropTypes from 'prop-types'

import * as StickyToast from './Footer.style'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import IconManager from '../IconManager'

const StickyToastComponent = ({
  children
}) => {
  const renderComponent = theme => (
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
  )  

  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

StickyToastComponent.propTypes = {
  children: PropTypes.node,
}

export default StickyToastComponent
