import React from 'react'
import PropTypes from 'prop-types'

const Heart = ({
  width = "20",
  height = "20",
  fill
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={fill}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
      </path>
    </svg>
  )
}

Heart.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string
}

export default Heart
