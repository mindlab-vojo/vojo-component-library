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
        <ApplicationCard.ImageCropper>
          <ApplicationCard.Image 
            isClosed={isClosed}
            src={imageUrl}
          />
        </ApplicationCard.ImageCropper>

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
