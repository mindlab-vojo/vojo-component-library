import React from 'react'
import PropTypes from 'prop-types'

import * as Spinner from './Spinner.style'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'

const SpinnerComponent = ({
  height,
  spinnerArea,
  width,
}) => {
  const renderComponent = (theme) => (
    <Spinner.Wrapper
      clasname="Spinner"
      spinnerArea={spinnerArea}>
      <Spinner.Spinner
        version="1.1" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        height={height} 
        width={width}>
        <g>
          <path 
            fill={theme.colors.primaryColor}
            d="M266.3,0c-34.3,0-62.1,27.8-62.1,62.1s27.8,62.1,62.1,62.1s62.1-27.8,62.1-62.1S300.6,0,266.3,0z M120.2,71.1
		c-28.5,0-51.7,23.2-51.7,51.7s23.2,51.7,51.7,51.7s51.7-23.2,51.7-51.7S148.8,71.1,120.2,71.1z M412.4,102.1
		c-11.4,0-20.7,9.3-20.7,20.7s9.3,20.7,20.7,20.7c11.4,0,20.7-9.3,20.7-20.7S423.8,102.1,412.4,102.1z M59.5,222.4
		c-25.7,0-46.5,20.8-46.5,46.5s20.8,46.5,46.5,46.5s46.5-20.8,46.5-46.5S85.2,222.4,59.5,222.4z M473.2,243.1
		c-14.3,0-25.9,11.6-25.9,25.9c0,14.3,11.6,25.9,25.9,25.9c14.3,0,25.9-11.6,25.9-25.9C499.1,254.6,487.5,243.1,473.2,243.1z
		M120.2,373.7c-22.9,0-41.4,18.5-41.4,41.4s18.5,41.4,41.4,41.4s41.4-18.5,41.4-41.4S143.1,373.7,120.2,373.7z M412.4,384
		c-17.1,0-31,13.9-31,31s13.9,31,31,31c17.1,0,31-13.9,31-31S429.6,384,412.4,384z M266.3,439.6c-20,0-36.2,16.2-36.2,36.2
		s16.2,36.2,36.2,36.2s36.2-16.2,36.2-36.2S286.3,439.6,266.3,439.6z"/>
        </g>
      </Spinner.Spinner>
    </Spinner.Wrapper>
  )
  
  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

SpinnerComponent.propTypes = {
  height: PropTypes.string,
  spinnerArea: PropTypes.string,
  width: PropTypes.string,
}

SpinnerComponent.defaultProps = {
  height: '50px',
  spinnerArea: '100px',
  width: '50px',
}

export default SpinnerComponent
