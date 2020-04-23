import React from 'react'
import PropTypes from 'prop-types'

const CheckboxChecked = ({
  width="24", 
  height="24",
  fill
}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      height={height} 
      viewBox="0 0 24 24" 
      width={width}>
      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill={fill}/>
      <path d="M0 0h24v24H0V0z" fill="none"/>
    </svg>
  )
}

CheckboxChecked.propTypes = {
  width: PropTypes.string, 
  height: PropTypes.string, 
  fill: PropTypes.string
}

export default CheckboxChecked
