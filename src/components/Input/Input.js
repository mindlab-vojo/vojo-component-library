import React, { Component } from 'react'
import PropTypes from 'prop-types'

import * as Input from './Input.style'
import Typography from '../Typography'
import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import StringValidator, { validatorPatterns, validatorTypes } from '../../utils/validators/StringValidator'

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
    errorMessage: '',
    isValid: true,
    value: this.props.value || '',
  }
  
  validatorType = validatorTypes.alphabeitcalSpaced

  handleInputChange = (event) => {
    const inputValue = event.target.value
    const validation = new StringValidator(inputValue, this.validatorType).validate()
    this.setState({
      errorMessage: validation.errorMessage,
      isValid: validation.isValid,
      value: validation.value,
    })
  }

  render() {
    const component = (theme) => (
      <Input.Wrapper className="Input">
        <Input.Label
          className="Input__Name"
          htmlFor={this.props.id}>
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
          onChange={(event) => this.handleInputChange(event)}
          placeholder={this.props.placeholder}
          type={this.props.type}
        />
        {
          !this.state.isValid && (
            <Typography 
              color={theme.colors.redColor}
              tag="span"
              type="default">
              {this.state.errorMessage}
            </Typography>
          )
        }
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