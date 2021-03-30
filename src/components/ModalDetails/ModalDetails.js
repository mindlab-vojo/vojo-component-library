import React from 'react'
import PropTypes from 'prop-types'

import * as ModalDetails from './ModalDetails.style'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import Modal from '../Modal'
import IconManager from '../IconManager'

function ModalDetailsComponent({
  children,
  modalWidth,
  open,
  company,
  cities,
  details,
  jobRole,
  slug,
  states,
  candidates,
  title
}) {

  const renderIcon = (icon, theme) => {
    return {
      'location': <IconManager icon="Location" fill={theme.colors.lightGreyColor} width={"14px"} height={"20"} />,
      'list': <IconManager icon="List" fill={theme.colors.lightGreyColor} width={"14px"} height={"20"} />,
      'close': <IconManager icon="Close" fill={theme.colors.lightGreyColor} width={"14px"} height={"20"} />,
    }[icon]
  }

  const renderCities = (theme) => {
    return (
      <section>
        <ModalDetails.Subtitle theme={theme}>
          {renderIcon('location', theme)}
          <h3>{cities.length} Cidades selecionadas</h3>
        </ModalDetails.Subtitle>
        <ModalDetails.Locations>
          {cities.map((item, index) => (
            <ModalDetails.Cities key={index}>{item}</ModalDetails.Cities>
          ))}
        </ModalDetails.Locations>
      </section>

    )
  }

  const renderStates = (theme) => {
    return (
      <section>
        <ModalDetails.Subtitle theme={theme}>
          {renderIcon('location', theme)}
          <h3>{states.length} Estados selecionadas</h3>
        </ModalDetails.Subtitle>
        <ModalDetails.Locations>
          {states.map((item, index) => (
            <ModalDetails.States key={index}>{item}</ModalDetails.States>
          ))}
        </ModalDetails.Locations>
      </section>

    )
  }

  const renderDetails = (theme) => {
    return (
      <>
        <ModalDetails.Subtitle theme={theme}>
          {renderIcon('list', theme)}
          <h3>{details.length} Filtros</h3>
        </ModalDetails.Subtitle>
        {details &&
          details.map((item, index) => {
            return (
              <div key={index}>
                <h4>{item.label}</h4>
                {Array.isArray(item.value)
                  ? item.value.map(value => (
                    <span key={index}>{value}</span>
                  ))
                  : <span>{item.value}</span>
                }
              </div>
            )
          })
        }
      </>
    )
  }

  const renderComponent = (theme) => (
    <Modal
      cardWidth={'560px'}
      cardHeight={'80vh'}>
      <ModalDetails.Header theme={theme}>
        <h3>{title}</h3>
        {renderIcon('close', theme)}
      </ModalDetails.Header>
      <ModalDetails.Content>
        <ModalDetails.Information>
          <section>
            <h1>{company} - {slug.split('_').slice(-2).join(' ').split('-').join('/')}</h1>
            <span>{jobRole}</span>
          </section>
          <section>
            <h1>{candidates}</h1>
            <h3>{candidates > 1 ? 'Candidatos' : 'Candidato'}</h3>
          </section>
        </ModalDetails.Information>
        {states && renderStates(theme)}
        {cities && renderCities(theme)}
        {renderDetails(theme)}
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
  open: PropTypes.bool,
  company: PropTypes.string,
  details: PropTypes.array,
  jobRole: PropTypes.string,
  slug: PropTypes.string,
  candidates: PropTypes.number,
  title: PropTypes.string,
  children: PropTypes.any,
  states: PropTypes.array,
  cities: PropTypes.array,
  modalWidth: PropTypes.string,
}

ModalDetailsComponent.defaultProps = {

}

export default ModalDetailsComponent

