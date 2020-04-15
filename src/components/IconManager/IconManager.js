import React from 'react'
import PropTypes from 'prop-types'

import Lock from './Icons/Lock'
import VisibilityOff from './Icons/VisibilityOff'
import VisibilityOn from './Icons/VisibilityOn'

const IconManager = ({ height, icon, fill, width }) => {

  const Icon = iconList[icon]

  return (
    <Icon
      height={height}
      fill={fill}
      width={width}
    />
  )
}

IconManager.propTypes = {
  height: PropTypes.string,
  fill: PropTypes.string,
  icon: PropTypes.string,
  width: PropTypes.string
}

export const iconList = {
  Lock: Lock,
  VisibilityOff: VisibilityOff,
  VisibilityOn: VisibilityOn
}

export default IconManager
