import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Typography = ({ children, tag, typoColor, typoStyles }) => {
  const Component = styled(tag)`
    color: ${typoColor};
    font-size: ${typoStyles.fontSize};
    margin: 0;
  `

  return (
    <Component>
      {children}
    </Component>
  )
}

Typography.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string, 
  tag: PropTypes.string,
  typoColor: PropTypes.string,
  typoStyles: PropTypes.object,
}