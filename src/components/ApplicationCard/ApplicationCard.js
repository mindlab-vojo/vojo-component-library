import React from 'react'
import PropTypes from 'prop-types'

import Card from '../Card'
import Typography from '../Typography'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import * as ApplicationCard from './ApplicationCard.style'

const ApplicationCardComponent = ({
  currentStep,
  jobTitle,
  imageUrl,
  isClosed,
  onClickCard,
  stepTitle,
  totalSteps,
}) => {

  const renderComponent = (theme) => (
    <Card
      hasPointer
      onClickCard={onClickCard}>
      <ApplicationCard.Wrapper>
        <ApplicationCard.ImageCropper>
          <ApplicationCard.Image 
            isClosed={isClosed}
            src={imageUrl}
          />
        </ApplicationCard.ImageCropper>
        <ApplicationCard.InfoWrapper>
          {
            isClosed ? (
              <>
                <ApplicationCard.InfoText>
                  <Typography
                    fontSize="14px"
                    fontWeight="bolder">
                Candidatura finalizada
                  </Typography>
                </ApplicationCard.InfoText>
                <ApplicationCard.InfoText>
                  <Typography
                    type={'h3'}>
                    {jobTitle}
                  </Typography>
                </ApplicationCard.InfoText>
              </>
            ) : (
              <>
                <ApplicationCard.InfoText>
                  <Typography
                    fontSize="12px">
                    {`Você está na etapa ${currentStep} de ${totalSteps}`}
                  </Typography>
                </ApplicationCard.InfoText>
                <ApplicationCard.InfoText>
                  <Typography
                    type={'h3'}
                    fontWeight={'600'}>
                    {stepTitle}
                  </Typography>
                </ApplicationCard.InfoText>
                <ApplicationCard.InfoText>
                  <Typography
                    type={'subtitle'}
                    tag={'h3'}
                    fontFamily={"'Montserrat', sans-serif"}
                    color={theme.colors.primaryColor}>
                    {jobTitle}
                  </Typography>
                </ApplicationCard.InfoText>
              </>
            )
          }
        </ApplicationCard.InfoWrapper>
      </ApplicationCard.Wrapper>
    </Card>
  )
  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

ApplicationCardComponent.propTypes = {
  currentStep: PropTypes.string,
  jobTitle: PropTypes.string,
  imageUrl: PropTypes.string,
  isClosed: PropTypes.bool,
  onClickCard: PropTypes.func,
  stepTitle: PropTypes.string,
  totalSteps: PropTypes.string,
}

export default ApplicationCardComponent
