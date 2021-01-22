import React from 'react'
import PropTypes from 'prop-types'

import * as ModalInformation from './ModalInformation.style'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import Modal from '../Modal'
import Typography from '../Typography'

function ModalInformationComponent({
  icon,
  children,
  modalWidth,
  list,
  unorderedList,
  title,
  description,
  actions
}) {

  const renderList = (list) => (
    list.map((item, index) => {
      return <ModalInformation.Item key={index}>
        {unorderedList ? <span>•</span> : <span>{index + 1}-</span>}
        {item}
      </ModalInformation.Item>
    })
  )


  const renderComponent = (theme) => (
    <Modal cardWidth={modalWidth}>
      <ModalInformation.Content>
        {icon}
        {title && <ModalInformation.Title>{title}</ModalInformation.Title>}
        {description && <ModalInformation.Description>{description}</ModalInformation.Description>}
        {list &&
          <ModalInformation.ListContainer>
            {unorderedList ? (
              <ModalInformation.UList>
                {renderList(list)}
              </ModalInformation.UList>
            ) : (
              <ModalInformation.OList
                theme={theme}>
                {renderList(list)}
              </ModalInformation.OList>
            )}
          </ModalInformation.ListContainer>}
        {children}
        {actions}
      </ModalInformation.Content>
    </Modal>
  )

  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

ModalInformationComponent.propTypes = {
  children: PropTypes.any,
  modalWidth: PropTypes.string,
  icon: PropTypes.any,
  list: PropTypes.array,
  unorderedList: PropTypes.bool,
  actions: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.string
}

ModalInformationComponent.defaultProps = {

}

export default ModalInformationComponent

