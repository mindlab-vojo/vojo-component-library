import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MaskedInput from 'react-text-mask'

import * as Input from './Input.style'
import Typography from '../Typography'
import IconManager from '../IconManager'
import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import StringValidator from '../../utils/validators/StringValidator'
import { validatorPatterns } from './../../utils/validators/validatorTypes'

class InputComponent extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    id: PropTypes.string,
    isPassword: PropTypes.bool,
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
    isPassword: this.props.isPassword,
    maskedValue: this.props.value || '',
    type: this.props.type,
    value: this.props.value || '',
  }
  
  validatorType = null

  validateInputValue = (inputValue) => {
    return new StringValidator(inputValue, this.validatorType).validate()
  }

  handleInputChange = (event) => {
    const inputValue = event.target.value
    const cleanValue = validatorPatterns[this.validatorType].maskRemover(inputValue)
    const validation = this.validateInputValue(cleanValue)
    const newInputState = {
      errorMessage: validation.errorMessage,
      isValid: validation.isValid,
      maskedValue: inputValue,
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
        maskedValue: this.state.maskedValue,
        value: this.state.value,
      }
      this.setState({ isFocused: false })
      this.props.onInputBlur(inputState)
    }
  }

  handleInputFocus = () => {
    this.setState({ isFocused: true })
  }

  handleInputVisibility = () => {
    this.setState({
      isVisible: this.state.type !== 'password',
      type: this.state.type !== 'password' ? 'password' : this.props.type
    })
  }

  hasLabel = () => {
    return (this.state.isFocused || this.state.value.length > 0)
  }

  render() {
    const inputRender = (theme) => validatorPatterns[this.validatorType].mask ? (
      <MaskedInput
        disabled={this.props.disabled}
        id={this.props.id}
        isValid={this.state.isValid}
        mask={validatorPatterns[this.validatorType].mask}
        name={this.props.name || this.props.id}
        onBlur={() => this.handleInputBlur()}
        onChange={(event) => this.handleInputChange(event)}
        onFocus={() => this.handleInputFocus()}
        placeholder={!this.hasLabel() ? (this.props.placeholder || this.props.label) : ''}
        theme={theme}
        type={this.state.type}
        value={this.state.maskedValue}
        render={(ref, props) => (
          <Input.Input
            className="Input__Input" 
            ref={ref}
            {...props}
          />
        )}
      />
    ) : (
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
        type={this.state.type}
        value={this.state.maskedValue}
      />
    )

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
          {
            this.props.isPassword && (
              <Input.InputIcon>
                <IconManager 
                  icon="Lock"
                  height="20"
                  width="20"
                />
              </Input.InputIcon>
            )
          }
          { inputRender(theme) }
          {
            this.props.isPassword && (
              <Input.InputIcon
                onClick={() => this.handleInputVisibility()}>
                <IconManager 
                  icon={this.state.isVisible ? "VisibilityOff" : "VisibilityOn"}
                  height="20"
                  width="20"/>
              </Input.InputIcon>
            )
          }
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