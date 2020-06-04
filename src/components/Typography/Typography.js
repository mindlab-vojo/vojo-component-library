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
  fontStyle,
  fontVariant,
  fontWeight,
  fontSize,
  lineHeight,
  fontFamily,
}) {

  const typographyTypes = {
    default: {
      fontSize: "14px"
    },
    smallText: {
      fontSize: "9px"
    },
    subtitle: {
      fontSize: "15px"
    },
    title: {
      fontSize: "24px"
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
      additionalProps={additionalProps}
      fontStyle={fontStyle}
      fontVariant={fontVariant}
      fontWeight={fontWeight}
      fontSize={fontSize}
      lineHeight={lineHeight}
      fontFamily={fontFamily}
    >
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
  // FontProps
  fontStyle: PropTypes.string,
  fontVariant: PropTypes.string,
  fontWeight: PropTypes.string,
  fontSize: PropTypes.string,
  lineHeight: PropTypes.string,
  fontFamily: PropTypes.string,
}

TypographyComponent.defaultProps = {
  color: "#212529", 
  type: "default",
  tag: "p",
  isUnderlined: false,
}

export default TypographyComponent

