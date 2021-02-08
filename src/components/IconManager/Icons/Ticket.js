import React from 'react'
import PropTypes from 'prop-types'

const Ticket = ({
  width = "20",
  height = "19",
  fill
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 0H18C19.11 0 20 0.89 20 2L18 3L20 4.5L18 6L20 7.5L18 9L20 10.5L18 12L20 13C20 14.11 19.11 15 18 15H2C0.89 15 0 14.11 0 13L2 12L0.00999999 10.5L2 9L0 7.5L2 6L0.00999999 4.5L2 3L0.00999999 2C0.00999999 0.89 0.89 0 2 0H6H14Z" 
        fill={fill} />
    </svg>
  )
}

Ticket.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string
}

export default Ticket
