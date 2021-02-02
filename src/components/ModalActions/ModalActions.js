import React from 'react'
import PropTypes from 'prop-types'

import * as ModalActions from './ModalActions.style'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import Modal from '../Modal'

function ModalActionsComponent({
  icon,
  children,
  modalWidth,
  title,
  description,
  actions
}) {



  const renderComponent = (theme) => (
    <Modal cardWidth={modalWidth}>
      <ModalActions.Content>
        {icon}
        {title && <ModalActions.Title>{title}</ModalActions.Title>}
        {description && <ModalActions.Description>{description}</ModalActions.Description>}
        {children}
        {actions}
      </ModalActions.Content>
    </Modal>
  )

  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

ModalActionsComponent.propTypes = {
  children: PropTypes.any,
  modalWidth: PropTypes.string,
  icon: PropTypes.any,
  list: PropTypes.array,
  unorderedList: PropTypes.bool,
  actions: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.string
}

ModalActionsComponent.defaultProps = {

}

export default ModalActionsComponent

