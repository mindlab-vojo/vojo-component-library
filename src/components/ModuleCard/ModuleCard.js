import React from 'react'
import PropTypes from 'prop-types'

import Card from '../Card'
import IconManager from '../IconManager'
import Typography from '../Typography'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import * as ModuleCard from './ModuleCard.style'

const ModuleCardComponent = ({
  description,
  iconName,
  iconBackgroundColor,
  lineHeight,
  onClickCard,
  title,
  time,
  titleSize,
  iconCircleSize,
  cardPadding
}) => {

  const renderComponent = (theme) => (
    <Card
      hasPointer
      onClickCard={onClickCard}
      padding={cardPadding}>
      <ModuleCard.Wrapper
        className="ModuleCard">
        <ModuleCard.IconWrapper
          className="ModuleCard__IconWrapper">
          <ModuleCard.IconCircle
            backgroundColor={iconBackgroundColor}
            iconCircleSize= {iconCircleSize}
            className="ModuleCard__IconCircle">
            <IconManager
              height={"24px"}
              fill={theme.colors.whiteColor}
              icon={iconName}
              width={"24px"}
            />
          </ModuleCard.IconCircle>
        </ModuleCard.IconWrapper>
        <ModuleCard.InfoWrapper
          lineHeight={lineHeight}
          className="ModuleCard__InfoWrapper">
          <ModuleCard.Title
            className="ModuleCard__InfoWrapper__Title">
            <Typography
              color={theme.colors.darkBlueColor}
              fontSize={titleSize}
              fontWeight="bolder"
              fontFamily="'Montserrat', sans-serif">
              {title}
            </Typography>
          </ModuleCard.Title>
          <ModuleCard.Description
            className="ModuleCard__InfoWrapper__Description">
            <Typography
              fontSize="12px">
              {description}
            </Typography>
          </ModuleCard.Description>
          <ModuleCard.Time
            className="ModuleCard__InfoWrapper__Time">
            <Typography
              fontSize="12px"
              fontWeight="bolder">
              {time}
            </Typography>
          </ModuleCard.Time>
        </ModuleCard.InfoWrapper>
      </ModuleCard.Wrapper>
    </Card>
  )
  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

ModuleCardComponent.propTypes = {
  description: PropTypes.string,
  iconName: PropTypes.string,
  iconBackgroundColor: PropTypes.string,
  lineHeight: PropTypes.string,
  imageUrl: PropTypes.string,
  onClickCard: PropTypes.func,
  title: PropTypes.string,
  time: PropTypes.string,
  iconCircleSize: PropTypes.string,
  titleSize: PropTypes.string,
  cardPadding: PropTypes.string
}

ModuleCardComponent.defaultProps = {
  iconCircleSize: "38px",
  titleSize: "18px",
  cardPadding: "14px 10px"
}

export default ModuleCardComponent
