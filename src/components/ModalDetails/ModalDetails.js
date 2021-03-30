import React from 'react'
import PropTypes from 'prop-types'

import * as ModalDetails from './ModalDetails.style'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import Modal from '../Modal'
import Typography from '../Typography'
import IconManager from '../IconManager'

function ModalDetailsComponent({
  children,
  cardWidth,
  onClickClose,
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
      'list': <IconManager icon="List" fill={theme.colors.lightGreyColor} width={"18px"} height={"17px"} />,
      'close': <IconManager icon="Close" fill={theme.colors.lightGreyColor} width={"20px"} height={"20px"} />,
    }[icon]
  }

  const renderCities = (theme) => {
    return (
      <section>
        <ModalDetails.Subtitle theme={theme}>
          {renderIcon('location', theme)}
          <Typography tag={'h3'}>{cities.length} Cidades selecionadas</Typography>
        </ModalDetails.Subtitle>
        <ModalDetails.Locations>
          {cities.map((item, index) => (
            <ModalDetails.Cities theme={theme} key={index}>{item}</ModalDetails.Cities>
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
          <Typography tag={'h3'}>{states.length} Estados selecionadas</Typography>
        </ModalDetails.Subtitle>
        <ModalDetails.Locations>
          {states.map((item, index) => (
            <ModalDetails.States theme={theme} key={index}>{item}</ModalDetails.States>
          ))}
        </ModalDetails.Locations>
      </section>

    )
  }

  const renderDetails = (theme) => {
    return (
      <ModalDetails.Details theme={theme}>
        <ModalDetails.Subtitle theme={theme}>
          {renderIcon('list', theme)}
          <Typography tag={'h3'}>{details.length} Filtros</Typography>
        </ModalDetails.Subtitle>
        {details &&
          details.map((item, index) => {
            return (
              <section key={index}>
                <Typography tag={'h4'}>{item.label}</Typography>
                {Array.isArray(item.value)
                  ? item.value.map(value => (
                    <Typography tag={'span'} key={index}>{value}</Typography>
                  ))
                  : <Typography tag={'span'}>{item.value}</Typography>
                }
              </section>
            )
          })
        }
      </ModalDetails.Details>
    )
  }

  const renderComponent = (theme) => (
    <Modal
      cardWidth={cardWidth}
      cardHeight={'80vh'}>
      <ModalDetails.Header theme={theme}>
        <Typography
          fontWeight={"700"}
          fontSize={"18px"}
          lineHeight={'20px'}
          letterSpacing={'0.25px'}
          type="title">
          {title}
        </Typography>
        <div onClick={onClickClose}>
          {renderIcon('close', theme)}
        </div>
      </ModalDetails.Header>
      <ModalDetails.Content theme={theme}>
        <ModalDetails.Information>
          <ModalDetails.FirstBlock>
            <Typography
              tag={'h3'}
              fontSize={'16px'}
              fontWeight={"700"}
              lineHeight={'20px'}
              letterSpacing={'0.25px'}>
              {company} - {slug.split('_').slice(-2).join(' ').split('-').join('/')}
            </Typography>
            <Typography
              fontSize={'12px'}
              fontWeight={'500'}
              letterSpacing={'0.2px'}
              color={theme.colors.lightGreyColor}
              tag={'span'}>
              {jobRole}
            </Typography>
          </ModalDetails.FirstBlock>
          <ModalDetails.SecondBlock>
            <Typography
              tag={'h1'}
              fontSize={'42px'}
              fontWeight={'700'}
              color={theme.colors.primaryColor}>
              {candidates}
            </Typography>
            <Typography
              tag={'h3'}
              color={theme.colors.lightGreyColor}
              fontSize={'16px'}
              fontWeight={'400'}
              letterSpacing={'0.25px'}>
              {candidates > 1 ? 'candidatos' : 'candidato'}
            </Typography>
          </ModalDetails.SecondBlock>
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
  onClickClose: PropTypes.func,
  company: PropTypes.string,
  details: PropTypes.array,
  jobRole: PropTypes.string,
  slug: PropTypes.string,
  candidates: PropTypes.number,
  title: PropTypes.string,
  children: PropTypes.any,
  states: PropTypes.array,
  cities: PropTypes.array,
  cardWidth: PropTypes.string,
}

ModalDetailsComponent.defaultProps = {
  cardWidth: '80vw'
}

export default ModalDetailsComponent

