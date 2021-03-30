import React from 'react'
import PropTypes from 'prop-types'

import * as ModalDetails from './ModalDetails.style'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import Modal from '../Modal'

function ModalDetailsComponent({
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
      return <ModalDetails.Item key={index}>
        {unorderedList ? <span>•</span> : <span>{index + 1}.</span>}
        {item}
      </ModalDetails.Item>
    })
  )


  const renderComponent = (theme) => (
    <Modal cardWidth={modalWidth}>
      <ModalDetails.Content>
        {icon}
        {title && <ModalDetails.Title>{title}</ModalDetails.Title>}
        {description && <ModalDetails.Description>{description}</ModalDetails.Description>}
        {list &&
          <ModalDetails.ListContainer>
            {unorderedList ? (
              <ModalDetails.UList
                theme={theme}>
                {renderList(list)}
              </ModalDetails.UList>
            ) : (
              <ModalDetails.OList
                theme={theme}>
                {renderList(list)}
              </ModalDetails.OList>
            )}
          </ModalDetails.ListContainer>}
        {children}
        {actions}
      </ModalDetails.Content>
    </Modal>
  )

  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

ModalDetailsComponent.propTypes = {
  children: PropTypes.any,
  modalWidth: PropTypes.string,
  icon: PropTypes.any,
  list: PropTypes.array,
  unorderedList: PropTypes.bool,
  actions: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.string
}

ModalDetailsComponent.defaultProps = {

}

export default ModalDetailsComponent

