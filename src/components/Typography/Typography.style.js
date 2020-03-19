import React from 'react'
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