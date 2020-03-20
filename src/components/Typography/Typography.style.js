import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Typography = ({ additionalProps, children, tag, typoColor, typoStyles, isUnderlined }) => {
  const Component = styled(tag).attrs({ ...additionalProps })`
    color: ${typoColor};
    font-size: ${typoStyles.fontSize};
    margin: 0;
    ${isUnderlined && `text-decoration: underline;`}
  `

  return (
    <Component>
      {children}
    </Component>
  )
}

Typography.propTypes = {
  additionalProps: PropTypes.object,
  children: PropTypes.string,
  color: PropTypes.string, 
  isUnderlined: PropTypes.bool,
  tag: PropTypes.string,
  typoColor: PropTypes.string,
  typoStyles: PropTypes.object,
}