import React from 'react'
import PropTypes from 'prop-types'

import * as JobCard from './JobCard.style'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import { Card } from '../Card/Card.style'
import Typography from '../Typography'

const JobCardComponent = ({
  borderRadius,
  companyNumber,
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
  titleSize
}) => {

  const slotText = slots > 1 ? "VAGAS" : "VAGA"
  const companiesText = companyNumber > 1 ? "empresas disponíveis" : "empresa disponível"

  const renderLocations = (theme) => {
    const states = locations[0].states ? locations[0].states.length : false

    if (states === 27 || showCountry) {
      const countryAbbreviation = locations[0].country.toUpperCase() === 'BRASIL' ? 'BR' : locations[0].country
      return (
        <JobCard.LocationCircle
          key={locations[0].country}
          theme={theme}>
          <Typography
            fontSize="12px"
            fontWeight="bolder"
            color={theme.colors.primaryColor}
            fontFamily={"'Rubik', sans-serif"}
          >
            {countryAbbreviation}
          </Typography>
        </JobCard.LocationCircle>
      )
    } else if (states) {
      return locations[0].states.map(state => (
        <JobCard.LocationCircle
          key={state}
          theme={theme}>
          <Typography
            fontSize="12px"
            fontWeight="bolder"
            color={theme.colors.primaryColor}
            fontFamily={"'Rubik', sans-serif"}
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
              fontSize={titleSize}
              fontWeight="bolder"
              fontFamily={"'Montserrat', sans-serif"}>
              {title}
            </Typography>
          </JobCard.Title>
          {subtitle && <JobCard.Subtitle>
            <Typography
              fontSize="12px"
              color={subtitleColor ? subtitleColor : theme.colors.lightGreyColor}
              fontFamily={"'Rubik', sans-serif"}>
              {`${subtitle}`}
            </Typography>
          </JobCard.Subtitle>}
          {isUnavailable ? (
            <JobCard.Unavailable>
              <Typography
                fontSize="12px"
                fontStyle="italic"
                fontFamily={"'Rubik', sans-serif"}>
                {`Se inscreva para ter acesso à vagas quando estiver disponível`}
              </Typography>
            </JobCard.Unavailable>
          ) : (
            <>
              {companyNumber && <JobCard.Companies>
                <Typography
                  fontSize="12px"
                  color={theme.colors.lightGreyColor}
                  fontFamily={"'Rubik', sans-serif"}>
                  {`${companyNumber} ${companiesText}`}
                </Typography>
              </JobCard.Companies>}
              {locationsOn && locations[0] && <JobCard.Locations>
                {renderLocations(theme)}
              </JobCard.Locations>}
              {freelance && <JobCard.Freelance theme={theme}>
                <Typography
                  fontSize="12px"
                  color={theme.colors.blackColor}
                  fontFamily={"'Rubik', sans-serif"}
                >
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
  titleSize: PropTypes.string
}

JobCardComponent.defaultProps = {
  titleColor: "#391DDD", 
  titleSize: '14px'
}

export default JobCardComponent
