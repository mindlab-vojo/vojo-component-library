import React from 'react'
import PropTypes from 'prop-types'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import GenericCard from '../GenericCard/GenericCard'

const ApplicationCardComponent = ({
  currentStep,
  jobTitle,
  imageUrl,
  onClickCard,
  totalSteps,
  company,
  companyColor, 
  companyFontWeight
}) => {
  const renderComponent = (theme) => (
    <GenericCard
      imageUrl={imageUrl}
      title={jobTitle}
      titleColor={currentStep === totalSteps ? 'rgb(57, 224, 155)' : '#391DDD'}
      currentStep={currentStep}
      subtitle={company}
      totalSteps={totalSteps}
      borderRadius={'500px'}
      imageOpacity={currentStep === totalSteps ? '25%' : '100%'}
      imageBackgroundColor={currentStep === totalSteps ? 'rgb(57, 224, 155)' : '#FFFFFF'}
      onClickCard={onClickCard}
      subtitleColor={companyColor}
      fontWeightSubtitle={companyFontWeight}
    />
  )

  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

ApplicationCardComponent.propTypes = {
  currentStep: PropTypes.number,
  jobTitle: PropTypes.string,
  fontWeightTitle: PropTypes.string,
  imageUrl: PropTypes.string,
  isClosed: PropTypes.bool,
  onClickCard: PropTypes.func,
  stepTitle: PropTypes.string,
  totalSteps: PropTypes.number,
  company: PropTypes.string,
  companyColor: PropTypes.string,
  companyFontWeight: PropTypes.string
}

export default ApplicationCardComponent
