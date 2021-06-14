import React from 'react'
import PropTypes from 'prop-types'

import * as JobCard from './JobCard.style'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import { Card } from '../Card/Card.style'
import Typography from '../Typography'

const JobCardComponent = ({
  borderRadius,
  companyNumber,
  description,
  freelance,
  id,
  imageUrl,
  isNew,
  isUnavailable,
  justifyContent,
  locations,
  locationsOn,
  onClickCard,
  showCountry,
  slots,
  subtitle,
  subtitleColor,
  title,
  titleColor,
  titleSize,
  stateNumber
}) => {

  const slotText = slots > 1 ? "VAGAS" : "VAGA"
  const companiesText = companyNumber > 1 ? "empresas disponíveis" : "empresa disponível"

  const renderLocations = (theme) => {
    const { states, country } = locations[0]
    const statesAmount = states ? states.length : false
    const countryAbbreviation = country.toUpperCase() === 'BRASIL' ? 'BR' : country
    const parseStates = (states, stateNumber) => { 
      if (statesAmount > stateNumber)
        return [...states.slice(0, 4), `+ ${states.slice(stateNumber).length}`]
      return states
    }

    if (statesAmount === 27 || showCountry) {
      return (
        <JobCard.LocationCircle
          key={country}
          theme={theme}>
          <Typography
            type={'label'}
            fontWeight="bolder"
            color={theme.colors.primaryColor}
          >
            {countryAbbreviation}
          </Typography>
        </JobCard.LocationCircle>
      )
    } 

    if (statesAmount) {
      return parseStates(states, stateNumber).map(state => (
        <JobCard.LocationCircle
          key={state}
          theme={theme}>
          <Typography
            type={'label'}
            fontWeight="bolder"
            color={theme.colors.primaryColor}
          >
            {state}
          </Typography>
        </JobCard.LocationCircle>
      ))
    }
  }

  const renderComponent = (theme) => (
    <Card
      hasPointer
      id={`JobCard-${id}`}
      padding="15px 8px"
      onClick={onClickCard}>
      { isNew && <JobCard.NewTag theme={theme}>
        <Typography
          color={theme.colors.whiteColor}>
          novidade
        </Typography>
      </JobCard.NewTag>}
      <JobCard.Wrapper>
        <JobCard.ImageBlock>
          <JobCard.ImageWrapper>
            <JobCard.ImageCropper borderRadius={borderRadius}>
              <JobCard.Image
                isUnavailable={isUnavailable}
                src={imageUrl}
                alt={title}
              />
            </JobCard.ImageCropper>
          </JobCard.ImageWrapper>
          {!isUnavailable && slots &&
            <JobCard.Slots>
              <Typography
                fontSize="10px"
                fontWeight="bolder">
                {`${slots} ${slotText}`}
              </Typography>
            </JobCard.Slots>
          }
        </JobCard.ImageBlock>
        <JobCard.DataBlock justifyContent={justifyContent}>
          <JobCard.Title>
            <Typography
              color={isUnavailable ? theme.colors.blackColor : titleColor}
              type={'h3'}
              fontSize={titleSize}>
              {title}
            </Typography>
          </JobCard.Title>
          {subtitle && <JobCard.Subtitle>
            <Typography
              type={'label'}
              color={subtitleColor ? subtitleColor : theme.colors.lightGreyColor}>
              {`${subtitle}`}
            </Typography>
          </JobCard.Subtitle>}
          {isUnavailable ? (
            <JobCard.Unavailable>
              <Typography
                type={'label'}
                fontStyle="italic">
                {`Se inscreva para ter acesso à vagas quando estiver disponível`}
              </Typography>
            </JobCard.Unavailable>
          ) : (
            <>
              {companyNumber && <JobCard.Companies>
                <Typography
                  type={'label'}
                  color={theme.colors.greyColor}
                  fontWeight={'500'}>
                  {`${companyNumber} ${companiesText}`}
                </Typography>
              </JobCard.Companies>}
              {description && <JobCard.Companies>
                <Typography
                  type={'label'}
                  color={theme.colors.greyColor}
                  fontWeight={'500'}>
                  {description}
                </Typography>
              </JobCard.Companies>}
              {locationsOn && locations[0] && <JobCard.Locations>
                {renderLocations(theme)}
              </JobCard.Locations>}
              {freelance && <JobCard.Freelance theme={theme}>
                <Typography
                  type={'label'}
                  color={theme.colors.blackColor}>
                  {"Autônomo"}
                </Typography>
              </JobCard.Freelance>}
            </>
          )
          }
        </JobCard.DataBlock>
      </JobCard.Wrapper>
    </Card>
  )

  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

JobCardComponent.propTypes = {
  borderRadius: PropTypes.string,
  companyNumber: PropTypes.number,
  description: PropTypes.string,
  freelance: PropTypes.bool,
  id: PropTypes.string,
  imageUrl: PropTypes.string,
  isNew: PropTypes.bool,
  isUnavailable: PropTypes.bool,
  justifyContent: PropTypes.string,
  locations: PropTypes.array,
  locationsOn: PropTypes.bool,
  onClickCard: PropTypes.func,
  showCountry: PropTypes.bool,
  slots: PropTypes.number,
  subtitle: PropTypes.string,
  subtitleColor: PropTypes.string,
  title: PropTypes.string,
  titleColor: PropTypes.string,
  titleSize: PropTypes.string,
  stateNumber: PropTypes.number
}

JobCardComponent.defaultProps = {
  titleColor: "#391DDD", 
  titleSize: '14px',
  stateNumber: 4
}

export default JobCardComponent
