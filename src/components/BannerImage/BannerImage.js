import React from 'react'
import PropTypes from 'prop-types'

import Typography from '../Typography'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import * as BannerImage from './BannerImage.style'

const BannerImageComponent = ({
  imageUrl,
  title,
}) => {

  const renderComponent = (theme) => (
    <BannerImage.Wrapper
      theme={theme}>
      <BannerImage.Cropper>
        <BannerImage.Image
          src={imageUrl}/>
      </BannerImage.Cropper>
      <BannerImage.Overlay/>
      <BannerImage.Title>
        <Typography 
          fontSize="36px"
          fontWeight="bolder"
          color={theme.colors.whiteColor}
          fontFamily="'Montserrat', sans-serif">
          {title}
        </Typography>
      </BannerImage.Title>
    </BannerImage.Wrapper>
  )
  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

BannerImageComponent.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
}

export default BannerImageComponent
