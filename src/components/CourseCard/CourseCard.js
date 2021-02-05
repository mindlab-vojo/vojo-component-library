import React from 'react'
import PropTypes from 'prop-types'

import GenericCard from '../GenericCard'
import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import { Card } from '../Card/Card.style'
import Typography from '../Typography'
import IconManager from '../IconManager'

const CourseCardComponent = ({
  coursesAvailable,
  id,
  imageUrl,
  isNew,
  isPremium,
  onClickCard,
  title,
  workload
}) => {

  const renderComponent = (theme) => (
    <GenericCard
      backgroundColor={isPremium ? theme.colors.primaryColor : theme.colors.whiteColor}
      borderRadius={isPremium ? '500px' : '0'}
      coursesAvailable={coursesAvailable}
      coursesAvailableColor={isPremium ? '#DDDDDD' : '#666666'}
      id={id}
      isNew={isNew}
      imageUrl={imageUrl}
      justifyContent={'space-between'}
      onClickCard={onClickCard}
      title={title}
      titleColor={isPremium ? theme.colors.whiteColor : theme.colors.primaryColor}
      workload={workload}
      workloadColor={isPremium ? '#DDDDDD' : '#666666'} />
  )

  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

CourseCardComponent.propTypes = {
  coursesAvailable: PropTypes.number,
  id: PropTypes.string,
  imageUrl: PropTypes.string,
  isPremium: PropTypes.bool,
  isNew: PropTypes.bool,
  onClickCard: PropTypes.func,
  title: PropTypes.string,
  workload: PropTypes.string
}

CourseCardComponent.defaultProps = {
  titleColor: "#391DDD",
  titleSize: '14px'
}

export default CourseCardComponent
