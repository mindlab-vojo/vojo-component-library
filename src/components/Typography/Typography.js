import React from 'react'
import PropTypes from 'prop-types'

import { Typography } from './Typography.style'

function TypographyComponent({ 
  additionalProps,
  children, 
  color, 
  type, 
  tag,
  isUnderlined,
}) {

  const typographyTypes = {
    default: {
      fontSize: "14px"
    },
    subtitles: {
      fontSize: "15px"
    },
    label: {
      fontSize: "13px"
    }
  }

  return (
    <Typography 
      tag={tag} 
      typoColor={color} 
      typoStyles={typographyTypes[type]}
      isUnderlined={isUnderlined}
      additionalProps={additionalProps}>
      {children}
    </Typography>
  )
}

TypographyComponent.propTypes = {
  additionalProps: PropTypes.object,
  children: PropTypes.node,
  color: PropTypes.string, 
  type: PropTypes.string,
  tag: PropTypes.string,
  isUnderlined: PropTypes.bool,
}

export default TypographyComponent

