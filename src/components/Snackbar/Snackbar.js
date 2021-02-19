import React from 'react'
import PropTypes from 'prop-types'

import Typography from '../Typography'
import IconManager from '../IconManager'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import * as Snackbar from './Snackbar.style'

const SnackbarComponent = ({
  backgroundColor,
  buttonText,
  buttonTextColor,
  description,
  descriptionColor,
  descriptionFontSize,
  height,
  iconColor,
  iconHeight,
  iconName,
  iconWidth,
  image,
  justifyText,
  onClickSnackbar,
  title,
  titleColor,
  titleSize
}) => {

  const renderComponent = (theme) => (
    <Snackbar.ContainerTest>
      <Snackbar.Container height={height} onClick={onClickSnackbar} backgroundColor={backgroundColor}>
        {iconName && <Snackbar.Icon>
          <IconManager
            height={iconHeight}
            fill={iconColor}
            icon={iconName}
            width={iconWidth} />
        </Snackbar.Icon>}
        <Snackbar.TextContainer justifyText={justifyText}>
          {title && <Typography type={'h3'} color={titleColor} fontSize={titleSize}>{title}</Typography>}
          {description && <Snackbar.Wrapper>
            <Typography type={'label'} color={descriptionColor} fontSize={descriptionFontSize}>{description}</Typography>
          </Snackbar.Wrapper>}
        </Snackbar.TextContainer>
        {image ? <>{image}</> : <Snackbar.Button>
          <Typography type={'default'} fontWeight={'500'} color={buttonTextColor} >{buttonText}</Typography>
        </Snackbar.Button>}

      </Snackbar.Container>
    </Snackbar.ContainerTest>
  )

  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

SnackbarComponent.propTypes = {
  backgroundColor: PropTypes.string,
  buttonText: PropTypes.string,
  buttonTextColor: PropTypes.string,
  description: PropTypes.string,
  descriptionColor: PropTypes.string,
  descriptionFontSize: PropTypes.string,
  height: PropTypes.string,
  iconColor: PropTypes.string,
  iconHeight: PropTypes.string,
  iconName: PropTypes.string,
  iconWidth: PropTypes.string,
  image: PropTypes.any,
  justifyText: PropTypes.string,
  onClickSnackbar: PropTypes.func,
  title: PropTypes.string,
  titleColor: PropTypes.string,
  titleSize: PropTypes.string
}

SnackbarComponent.defaultProps = {
  backgroundColor: '#391DDD',
  height: '100%',
  iconColor: '#FFFFFF',
  descriptionColor: '#DDDDDD',
  titleColor: '#FFFFFF',
  titleSize: "14px",
  buttonTextColor: '#FFFFFF'
}

export default SnackbarComponent
