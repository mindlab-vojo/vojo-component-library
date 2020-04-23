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
      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill={fill}/>
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
