import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

function TypographyComponent({ children, color, type, tag }) {

  const typographyTypes = {
    default: {
      fontSize: "15px"
    }
  }

  const Component = styled[tag](`
    font-size: ${props => props.typoStyles.fontSize}
    color: ${props => props.typoColor};
  `)

  return (
    <Component typoColor={color} typoStyles={typographyTypes[type]}>
      {children}
    </Component>
  )
}

TypographyComponent.propTypes = {

}

export default TypographyComponent

