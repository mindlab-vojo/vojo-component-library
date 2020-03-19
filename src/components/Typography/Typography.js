import React from 'react'
import PropTypes from 'prop-types'

import { Typography } from './Typography.style'

function TypographyComponent({ children, color, type, tag }) {

  const typographyTypes = {
    default: {
      fontSize: "20px"
    }
  }

  return (
    <Typography 
      tag={tag} 
      typoColor={color} 
      typoStyles={typographyTypes[type]}>
      {children}
    </Typography>
  )
}

TypographyComponent.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string, 
  type: PropTypes.string,
  tag: PropTypes.string
}

export default TypographyComponent

