import React, { Component } from 'react'
import PropTypes from 'prop-types'

import * as Input from './Input.style'
import Typography from '../Typography'
import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import StringValidator from '../../utils/validators/StringValidator'

class InputComponent extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
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
    isFocused: false,
    value: this.props.value || '',
  }
  
  validatorType = null

  validateInputValue = (inputValue) => {
    return new StringValidator(inputValue, this.validatorType).validate()
  }

  handleInputChange = (event) => {
    const inputValue = event.target.value
    const validation = this.validateInputValue(inputValue)
    const newInputState = {
      errorMessage: validation.errorMessage,
      isValid: validation.isValid,
      value: validation.value,
    }

    this.setState({ ...newInputState })
    this.props.onInputChange && this.props.onInputChange(newInputState)
  }

  handleInputBlur = () => {
    if (this.props.onInputBlur) {
      const inputState = {
        errorMessage: this.state.errorMessage,
        isValid: this.state.isValid,
        value: this.state.value,
      }
      this.setState({ isFocused: false })
      this.props.onInputBlur(inputState)
    }
  }

  handleInputFocus = () => {
    this.setState({ isFocused: true })
  }

  hasLabel = () => {
    return (this.state.isFocused || this.state.value.length > 0)
  }

  render() {
    const component = (theme) => (
      <Input.Wrapper 
        className="Input"
        theme={theme}>
        <Input.Label
          className="Input__Name"
          hasLabel={this.hasLabel()}
          htmlFor={this.props.id}
          isValid={this.state.isValid}
          theme={theme}>
          <Typography 
            color={this.state.isValid ? theme.colors.primaryColor : theme.colors.redColor}
            tag="span"
            type="label">
            <strong>
              {this.props.label}
            </strong>
          </Typography>
        </Input.Label>
        <Input.InputBackground
          className="Input__InputBackground"
          isValid={this.state.isValid}
          theme={theme}>
          <Input.Input
            className="Input__Input" 
            disabled={this.props.disabled}
            id={this.props.id}
            isValid={this.state.isValid}
            name={this.props.name || this.props.id}
            onBlur={() => this.handleInputBlur()}
            onChange={(event) => this.handleInputChange(event)}
            onFocus={() => this.handleInputFocus()}
            placeholder={!this.hasLabel() ? (this.props.placeholder || this.props.label) : ''}
            theme={theme}
            type={this.props.type}
          />
        </Input.InputBackground>
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