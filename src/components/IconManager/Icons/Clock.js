import React from 'react'
import PropTypes from 'prop-types'

const Clock = ({
  width = "24",
  height = "24",
  fill
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" 
      width={width} 
      height={height} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={fill}
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  )
}

Clock.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string
}

export default Clock
