import React from 'react'
import PropTypes from 'prop-types'

const Exclamation = ({
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
      <circle cx="12" cy="19" r="2" fill={fill}/>
      <path d="M10 3h4v12h-4z" fill={fill}/>
    </svg>
  )
}

Exclamation.propTypes = {
  width: PropTypes.string, 
  height: PropTypes.string, 
  fill: PropTypes.string
}

export default Exclamation
