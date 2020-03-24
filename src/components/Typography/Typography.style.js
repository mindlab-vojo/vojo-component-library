import React,  { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export class Typography extends Component {
  static propTypes = {
    additionalProps: PropTypes.object,
    children: PropTypes.node,
    color: PropTypes.string, 
    isUnderlined: PropTypes.bool,
    tag: PropTypes.string,
    typoColor: PropTypes.string,
    typoStyles: PropTypes.object,
  }

  render() {
    const { additionalProps, children, tag, typoColor, typoStyles, isUnderlined } = this.props;

    const Component = styled(tag).attrs(additionalProps)`
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
}