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
  iconColor,
  iconHeight,
  iconName,
  iconWidth,
  justifyText,
  onClickSnackbar,
  title,
  titleColor,
}) => {

  const renderComponent = (theme) => (
    <Snackbar.ContainerTest>
      <Snackbar.Container backgroundColor={backgroundColor}>
        {iconName && <Snackbar.Icon>
          <IconManager
            height={iconHeight}
            fill={iconColor}
            icon={iconName}
            width={iconWidth} />
        </Snackbar.Icon>}
        <Snackbar.TextContainer justifyText={justifyText}>
          {title && <Typography type={'h3'} color={titleColor}>{title}</Typography>}
          {description && <Snackbar.Wrapper>
            <Typography type={'label'} color={descriptionColor} fontSize={descriptionFontSize}>{description}</Typography>
          </Snackbar.Wrapper>}
        </Snackbar.TextContainer>
        <Snackbar.Button onClick={onClickSnackbar}>
          <Typography type={'default'} fontWeight={'500'} color={buttonTextColor} >{buttonText}</Typography>
        </Snackbar.Button>
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
  iconColor: PropTypes.string,
  iconHeight: PropTypes.string,
  iconName: PropTypes.string,
  iconWidth: PropTypes.string,
  justifyText: PropTypes.string,
  onClickSnackbar: PropTypes.func,
  title: PropTypes.string,
  titleColor: PropTypes.string,
}

SnackbarComponent.defaultProps = {
  backgroundColor: '#391DDD',
  iconColor: '#FFFFFF',
  descriptionColor: '#DDDDDD',
  titleColor: '#FFFFFF',
  buttonTextColor: '#FFFFFF'
}

export default SnackbarComponent
