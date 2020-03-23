import React, { Component } from 'react'
import PropTypes from 'prop-types'

import * as Input from './Input.style'
import Typography from '../Typography'
import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'

class InputComponent extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    id: PropTypes.string,
    name: PropTypes.string,
    onInputBlur: PropTypes.func,
    onInputChange: PropTypes.func,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
  }

  state = {
    value: this.props.value || ''
  }



  render() {
    const component = (theme) => (
      <Input.Wrapper className="Input">
        <Input.Label
          className="Input__Name"
          for={this.props.id}>
          <Typography 
            color={theme.colors.primaryColor}
            tag="span"
            type="default">
              Test
          </Typography>
        </Input.Label>
        <Input.Input
          className="Input__Input" 
          disabled={this.props.disabled}
          id={this.props.id}
          name={this.props.name || this.props.id}
          placeholder={this.props.placeholder}
          type={this.props.type}
        />
      </Input.Wrapper>
    )

    return (
      <ThemeConsumer>
        {({ theme }) => component(theme)}
      </ThemeConsumer>
    )
  }
}

export default InputComponent