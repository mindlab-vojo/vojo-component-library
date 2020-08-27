import React from 'react'
import PropTypes from 'prop-types'

const Hamburger = ({
  width="18", 
  height="12",
  fill
}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      height={height} 
      viewBox="0 0 18 12" 
      width={width}>
      <path d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" fill={fill}/>
    </svg>
  )
}

Hamburger.propTypes = {
  width: PropTypes.string, 
  height: PropTypes.string, 
  fill: PropTypes.string
}

export default Hamburger
