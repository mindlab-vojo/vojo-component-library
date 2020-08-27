import React from 'react'
import PropTypes from 'prop-types'

const SuitcaseArrow = ({
  width="20", 
  height="19",
  fill
}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      height={height} 
      viewBox="0 0 20 19" 
      width={width}>
      <path 
        d="M18 4H14V2C14 1.45 13.78 0.95 13.41 0.59C13.05 0.22 12.55 0 12 0H8C6.9 0 6 0.9 6 2V4H2C0.9 4 0 4.9 0 6V17C0 18.1 0.9 19 2 19H18C19.1 19 20 18.1 20 17V6C20 4.9 19.1 4 18 4ZM8 2H12V4H8V2ZM9 15.5L8 14.5L11 11.5L8 8.5L9 7.5L13 11.5L9 15.5Z"
        fill={fill}
      />
    </svg>
  )
}

SuitcaseArrow.propTypes = {
  width: PropTypes.string, 
  height: PropTypes.string, 
  fill: PropTypes.string
}

export default SuitcaseArrow
