import React from 'react'
import PropTypes from 'prop-types'

import * as JobCard from './JobCard.style'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import { Card } from '../Card/Card.style'
import Typography from '../Typography'

const JobCardComponent = ({
  companyNumber,
  id,
  imageUrl,
  isNew,
  isUnavailable,
  locations,
  onClickCard,
  slots,
  title,
}) => {
  const slotText = slots > 1 ? "VAGAS" : "VAGA"
  const companiesText = companyNumber > 1 ? "empresas" : "empresa"
  
  const renderLocations = (theme) => {
    const locationLength = locations[0].states.length

    switch (locationLength) {
    case 1: 
      return locations[0].states.map(location => (
        <JobCard.SingleState
          key={location.uf}>
          <JobCard.StateCircle 
            theme={theme}>
            <Typography
              fontSize="12px"
              fontWeight="bolder"
            >
              {location.uf}
            </Typography>
          </JobCard.StateCircle>
          <JobCard.Cities>
            <Typography>
              {location.cities.map((city, index) => ((index + 1) === location.cities.length) ? `${city}` : `${city}, `)}
            </Typography>
          </JobCard.Cities>
        </JobCard.SingleState>
      ));
        
    case 27:
      return (
        <JobCard.CountryCircle 
          key={locations[0].country}
          theme={theme}>
          <Typography
            fontSize="12px"
            fontWeight="bolder"
          >
            {locations[0].country}
          </Typography>
        </JobCard.CountryCircle>
      )
      
    default:
      return locations[0].states.map(location => (
        <JobCard.StateCircle 
          key={location.uf}
          theme={theme}>
          <Typography
            fontSize="12px"
            fontWeight="bolder"
          >
            {location.uf}
          </Typography>
        </JobCard.StateCircle>
      ));
    }
  }

  const renderComponent = (theme) => (
    <Card 
      id={`JobCard-${id}`}
      padding="15px 8px" 
      onClick={onClickCard}>
      {
        isNew && (
          <JobCard.NewTag theme={theme}>
            <Typography
              color={theme.colors.whiteColor}>
              novidade
            </Typography>
          </JobCard.NewTag>
        )
      }
      <JobCard.Wrapper
        className="JobCard">
        <JobCard.ImageBlock 
          className="JobCard__ImageBlock">
          <JobCard.ImageWrapper
            className="JobCard__ImageWrapper">
            <JobCard.ImageCropper
              className="JobCard__ImageWrapper__Cropper">
              <JobCard.Image
                src={imageUrl}
                alt={title}
              />
            </JobCard.ImageCropper>
          </JobCard.ImageWrapper>
          <JobCard.Slots
            className="JobCard__Slots">
            <Typography 
              fontSize="10px"
              fontWeight="bolder">
              {`${slots} ${slotText}`}
            </Typography>
          </JobCard.Slots>
        </JobCard.ImageBlock>
        <JobCard.DataBlock
          className="JobCard__DataBlock">
          <JobCard.Title
            className="JobCard__Title">
            <Typography
              color={theme.colors.darkBlueColor}
              fontSize="18px"
              fontWeight="bolder">
              {title}
            </Typography>
          </JobCard.Title>
          <JobCard.Companies
            className="JobCard__Companies">
            <Typography
              fontSize="12px">
              {`${companyNumber} ${companiesText} contratando em`}
            </Typography>
          </JobCard.Companies>
          <JobCard.Locations
            className="JobCard__Locations">
            {renderLocations(theme)}
          </JobCard.Locations>
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
  companyNumber: PropTypes.number,
  id: PropTypes.string,
  imageUrl: PropTypes.string,
  isNew: PropTypes.bool,
  isUnavailable: PropTypes.bool,
  locations: PropTypes.array,
  slots: PropTypes.number,
  onClickCard: PropTypes.string,
  title: PropTypes.string,
}

export default JobCardComponent
