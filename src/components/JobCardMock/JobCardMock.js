import React from 'react'
import PropTypes from 'prop-types'

import * as JobCardMock from './JobCardMock.style'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import { Card } from '../Card/Card.style'
import Typography from '../Typography'

const JobCardMockComponent = ({
  backgroundColor,
  borderRadius,
  id,
  imageUrl,
  isNew,
  isUnavailable,
  locations,
  onClickCard,
  subtitle,
  subtitleColor,
  titleColor,
  title,
}) => {
  
  const renderLocations = (theme) => {
    const locationLength = locations[0].states.length

    switch (locationLength) {
    // DEPRECATED
    // case 1: 
    //   return locations[0].states.map(location => (
    //     <JobCardMock.SingleState
    //       key={location.uf}>
    //       <JobCardMock.StateCircle 
    //         theme={theme}>
    //         <Typography
    //           fontSize="12px"
    //           fontWeight="bolder"
    //         >
    //           {location.uf}
    //         </Typography>
    //       </JobCardMock.StateCircle>
    //       <JobCardMock.Cities>
    //         <Typography>
    //           {location.cities.map((city, index) => ((index + 1) === location.cities.length) ? `${city}` : `${city}, `)}
    //         </Typography>
    //       </JobCardMock.Cities>
    //     </JobCardMock.SingleState>
    //   ));
        
    case 27:
      return (
        <JobCardMock.CountryCircle 
          key={locations[0].country}
          theme={theme}>
          <Typography
            fontSize="12px"
            fontWeight="bolder"
            color={theme.colors.primaryColor}
          >
            {"Autônomo"}
          </Typography>
        </JobCardMock.CountryCircle>
      )
      
    default:
      return locations[0].states.map(state => (
        <JobCardMock.StateCircle 
          key={state}
          theme={theme}>
          <Typography
            fontSize="12px"
            fontWeight="bolder"
            color={theme.colors.primaryColor}
          >
            {state}
          </Typography>
        </JobCardMock.StateCircle>
      ));
    }
  }

  const renderComponent = (theme) => (
    <Card 
      backgroundColor={backgroundColor}
      hasPointer
      id={`JobCardMock-${id}`}
      padding="15px 8px" 
      onClick={onClickCard}>
      {
        isNew && (
          <JobCardMock.NewTag theme={theme}>
            <Typography
              color={theme.colors.whiteColor}>
              novidade
            </Typography>
          </JobCardMock.NewTag>
        )
      }
      <JobCardMock.Wrapper
        className="JobCardMock">
        <JobCardMock.ImageBlock 
          className="JobCardMock__ImageBlock">
          <JobCardMock.ImageWrapper
            className="JobCardMock__ImageWrapper">
            <JobCardMock.ImageCropper
              borderRadius={borderRadius}
              className="JobCardMock__ImageWrapper__Cropper">
              <JobCardMock.Image
                isUnavailable={isUnavailable}
                src={imageUrl}
                alt={title}
              />
            </JobCardMock.ImageCropper>
          </JobCardMock.ImageWrapper>
        </JobCardMock.ImageBlock>
        <JobCardMock.DataBlock
          className="JobCardMock__DataBlock">
          <JobCardMock.Title
            className="JobCardMock__Title">
            <Typography
              color={isUnavailable ? theme.colors.blackColor : titleColor}
              fontSize="18px"
              fontWeight="bolder">
              {title}
            </Typography>
          </JobCardMock.Title>
          {
            isUnavailable ? (
              <>
                <JobCardMock.Unavailable
                  className="JobCardMock__Unavailable">
                  <Typography
                    fontSize="12px"
                    fontStyle="italic">
                    {`Se inscreva para ter acesso à vagas quando estiver disponível`}
                  </Typography>
                </JobCardMock.Unavailable>
              </>
            ) : (
              <>
                <JobCardMock.Companies
                  className="JobCardMock__Companies">
                  <Typography
                    fontSize="12px"
                    color={subtitleColor}>
                    {`${subtitle}`}
                  </Typography>
                </JobCardMock.Companies>
                <JobCardMock.Locations
                  className="JobCardMock__Locations">
                  {renderLocations(theme)}
                </JobCardMock.Locations>
              </>
            )
          }
        </JobCardMock.DataBlock>
      </JobCardMock.Wrapper>
    </Card>
  )

  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

JobCardMockComponent.propTypes = {
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.string,
  companyNumber: PropTypes.number,
  id: PropTypes.string,
  imageUrl: PropTypes.string,
  isNew: PropTypes.bool,
  isUnavailable: PropTypes.bool,
  locations: PropTypes.array,
  onClickCard: PropTypes.func,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  titleColor: PropTypes.string,
  subtitleColor: PropTypes.string,
}

export default JobCardMockComponent
