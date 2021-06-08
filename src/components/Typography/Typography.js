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
  letterSpacing,
  lineHeight,
  fontFamily,
  className
}) {

  const typographyTypes = {
    default: {
      fontSize: "14px"
    },
    smallText: {
      fontSize: "9px",
      lineHeight: "18px",
    },
    subtitle: {
      fontSize: "16px"
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      fontFamily: "'Montserrat', sans-serif"
    },
    h1: {
      fontSize: "24px",
      fontWeight: "bold",
      lineHeight: "28px",
      fontFamily: "'Montserrat', sans-serif",
    },
    h3: {
      fontSize: "14px",
      fontWeight: "bold",
      lineHeight: "18px",
      fontFamily: "'Montserrat', sans-serif",
    },
    label: {
      fontSize: "12px"
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
      letterSpacing={letterSpacing}
      fontFamily={fontFamily}
      className={className}
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
  letterSpacing: PropTypes.string,
  fontFamily: PropTypes.string,
  className: PropTypes.string
}

TypographyComponent.defaultProps = {
  color: "#212529", 
  type: "default",
  tag: "p",
  isUnderlined: false,
}

export default TypographyComponent

