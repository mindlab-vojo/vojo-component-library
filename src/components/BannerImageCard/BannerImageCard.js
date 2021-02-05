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
      onClick={onClickCard}
      theme={theme}>
      <BannerImageCard.Cropper>
        <BannerImageCard.Image
          src={imageUrl}/>
      </BannerImageCard.Cropper>
      <BannerImageCard.Overlay/>
      <BannerImageCard.TextArea>
        <BannerImageCard.Title>
          <Typography 
            fontSize="18px"
            fontWeight="bolder"
            color={theme.colors.whiteColor}
            fontFamily="'Montserrat', sans-serif">
            {title}
          </Typography>
        </BannerImageCard.Title>
        <BannerImageCard.Subtitle>
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
