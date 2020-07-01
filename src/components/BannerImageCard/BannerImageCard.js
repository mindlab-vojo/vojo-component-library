import React from 'react'
import PropTypes from 'prop-types'

import Typography from '../Typography'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import * as BannerImageCard from './BannerImageCard.style'

const BannerImageCardComponent = ({
  imageUrl,
  onClickCard,
  subtitle,
  title,
}) => {

  const renderComponent = (theme) => (
    <BannerImageCard.Wrapper
      className="BannerImageCard"
      onClick={onClickCard}
      theme={theme}>
      <BannerImageCard.Cropper
        className="BannerImageCard__Cropper">
        <BannerImageCard.Image
          className="BannerImageCard__Image"
          src={imageUrl}/>
      </BannerImageCard.Cropper>
      <BannerImageCard.Overlay
        className="BannerImageCard__Overlay"/>
      <BannerImageCard.TextArea>
        <BannerImageCard.Title
          className="BannerImageCard__Title">
          <Typography 
            fontSize="18px"
            fontWeight="bolder"
            color={theme.colors.whiteColor}>
            {title}
          </Typography>
        </BannerImageCard.Title>
        <BannerImageCard.Subtitle
          className="BannerImageCard__Subtitle">
          <Typography 
            fontSize="12px"
            color={theme.colors.whiteColor}>
            {subtitle}
          </Typography>
        </BannerImageCard.Subtitle>
      </BannerImageCard.TextArea>
    </BannerImageCard.Wrapper>
  )
  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

BannerImageCardComponent.propTypes = {
  imageUrl: PropTypes.string,
  onClickCard: PropTypes.func,
  subtitle: PropTypes.string,
  title: PropTypes.string,
}

export default BannerImageCardComponent
