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
    fontStyle: PropTypes.string,
    fontVariant: PropTypes.string,
    fontWeight: PropTypes.string,
    fontSize: PropTypes.string,
    lineHeight: PropTypes.string,
    fontFamily: PropTypes.string,
  }

  render() {
    const {
      additionalProps, 
      children, 
      tag, 
      typoColor, 
      typoStyles, 
      isUnderlined,
      fontStyle,
      fontVariant,
      fontWeight,
      fontSize,
      lineHeight,
      fontFamily,
    } = this.props;

    const Component = styled(tag).attrs(additionalProps)`
      color: ${typoColor};
      font-size: ${typoStyles.fontSize};
      font-family: ${typoStyles.fontFamily};
      font-weight: ${typoStyles.fontWeight};
      line-height: ${typoStyles.lineHeight};
      margin: 0;
      letter-spacing: 0.2px;
      ${isUnderlined && `text-decoration: underline;`}
      ${fontStyle && `font-style: ${fontStyle};`}
      ${fontVariant && `font-variant: ${fontVariant};`}
      ${fontWeight && `font-weight: ${fontWeight};`}
      ${fontSize && `font-size: ${fontSize};`}
      ${lineHeight && `line-height: ${lineHeight};`}
      ${fontFamily && `font-family: ${fontFamily};`}
      }
    `

    return (
      <Component>
        {children}
      </Component>
    )
  }
}