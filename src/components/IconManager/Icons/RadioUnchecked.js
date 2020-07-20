import React from 'react'
import PropTypes from 'prop-types'

const RadioUnchecked = ({
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
      <path d="M0 0h24v24H0z" fill="none"/>
      <path 
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
        fill={fill}/>
    </svg>
  )
}

RadioUnchecked.propTypes = {
  width: PropTypes.string, 
  height: PropTypes.string, 
  fill: PropTypes.string
}

export default RadioUnchecked
