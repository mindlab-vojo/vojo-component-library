import React from 'react'
import PropTypes from 'prop-types'

import * as BannerCard from './BannerCard.style'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import { Card } from '../Card/Card.style'
import Typography from '../Typography'

const BannerCardComponent = ({
  description,
  id,
  onClickCard,
  title,
}) => {

  const renderComponent = (theme) => (
    <Card 
      hasPointer
      id={`BannerCard-${id}`}
      padding="15px 8px" 
      onClick={onClickCard}>
      <BannerCard.Wrapper 
        className="BannerCard">
        <BannerCard.LeftContent
          className="BannerCard__LeftContent">
          <BannerCard.Image
            className="BannerCard__LeftContent__Image"
            theme={theme}>
            <Typography
              color={theme.colors.darkBlueColor}
              fontSize="18px"
              fontWeight="bolder">
              ?
            </Typography>
          </BannerCard.Image>
        </BannerCard.LeftContent>
        <BannerCard.RightContent
          className="BannerCard__RightContent">
          <BannerCard.Description
            className="BannerCard__RightContent__Description">
            <Typography
              fontSize="12px">
              {description}
            </Typography>
          </BannerCard.Description>
          <BannerCard.Title
            className="BannerCard__RightContent__Title">
            <Typography
              color={theme.colors.darkBlueColor}
              fontSize="18px"
              fontWeight="bolder">
              {title}
            </Typography>
          </BannerCard.Title>
        </BannerCard.RightContent>
      </BannerCard.Wrapper>
    </Card>
  )

  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

BannerCardComponent.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string,
  onClickCard: PropTypes.func,
  title: PropTypes.string,
}

export default BannerCardComponent