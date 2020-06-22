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
      className="BannerImage"
      theme={theme}>
      <BannerImage.Cropper
        className="BannerImage__Cropper">
        <BannerImage.Image
          className="BannerImage__Image"
          src={imageUrl}/>
      </BannerImage.Cropper>
      <BannerImage.Overlay/>
      <BannerImage.Title>
        <Typography 
          fontSize="36px"
          fontWeight="bolder"
          color={theme.colors.whiteColor}>
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
