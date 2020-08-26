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
      <ApplicationCard.Wrapper
        className="ApplicationCard">
        <ApplicationCard.ImageCropper 
          className="ApplicationCard__Image">
          <ApplicationCard.Image 
            className="ApplicationCard__Image__Image"
            isClosed={isClosed}
            src={imageUrl}
          />
        </ApplicationCard.ImageCropper>
        <ApplicationCard.InfoWrapper
          className="ApplicationCard__Info">
          {
            isClosed ? (
              <>
                <ApplicationCard.InfoText
                  className="ApplicationCard__Info__Text">
                  <Typography
                    fontSize="14px"
                    fontWeight="bolder">
                Candidatura finalizada
                  </Typography>
                </ApplicationCard.InfoText>
                <ApplicationCard.InfoText
                  className="ApplicationCard__Info__Text">
                  <Typography
                    fontSize="18px">
                    {jobTitle}
                  </Typography>
                </ApplicationCard.InfoText>
              </>
            ) : (
              <>
                <ApplicationCard.InfoText
                  className="ApplicationCard__Info__Text">
                  <Typography
                    fontSize="12px">
                    {`Você está na etapa ${currentStep} de ${totalSteps}`}
                  </Typography>
                </ApplicationCard.InfoText>
                <ApplicationCard.InfoText
                  className="ApplicationCard__Info__Text">
                  <Typography
                    fontSize="14px"
                    fontWeight="bolder">
                    {stepTitle}
                  </Typography>
                </ApplicationCard.InfoText>
                <ApplicationCard.InfoText
                  className="ApplicationCard__Info__Text">
                  <Typography
                    fontSize="18px"
                    fontWeight="bolder"
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
