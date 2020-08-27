import React from 'react'
import PropTypes from 'prop-types'

const Course = ({
  width="22", 
  height="18",
  fill
}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      height={height} 
      viewBox="0 0 22 18" 
      width={width}>
      <path d="M4 10.18V14.18L11 18L18 14.18V10.18L11 14L4 10.18ZM11 0L0 6L11 12L20 7.09V14H22V6L11 0Z" fill={fill}/>
    </svg>
  )
}

Course.propTypes = {
  width: PropTypes.string, 
  height: PropTypes.string, 
  fill: PropTypes.string
}

export default Course
