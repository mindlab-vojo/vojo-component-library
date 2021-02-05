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
    errorMessage: PropTypes.string,
    id: PropTypes.string,
    isPassword: PropTypes.bool,
    isRequired: PropTypes.bool,
    label: PropTypes.string,
    name: PropTypes.string,
    onInputBlur: PropTypes.func,
    onInputChange: PropTypes.func,
    placeholder: PropTypes.string,
    showError: PropTypes.bool,
    type: PropTypes.string,
    value: PropTypes.string,
  }
  
  state = {
    errorMessage: this.props.errorMessage,
    isValid: true,
    isFocused: false,
    isVisible: this.props.isPassword,
    isPassword: this.props.isPassword,
    maskedValue: this.props.value || '',
    type: this.props.isPassword ? 'password' : this.props.type,
    value: this.props.value || '',
  }
  
  validatorType = null

  componentDidMount() {
    const validation = this.validateInputValue(this.state.value)
    this.setState({
      errorMessage: validation.errorMessage,
      isValid: validation.isValid,
      value: validation.value,
    })
  }

  componentDidUpdate = (prevProps) => {
    this.handleErrorMessagePropsChange(prevProps.errorMessage, this.props.errorMessage)
  }

  validateInputValue = (inputValue) => {
    return new StringValidator(inputValue, this.validatorType, { isRequired: this.props.isRequired }).validate()
  }

  handleErrorMessagePropsChange = (prevErrorMessage, currentErrorMessage) => {
    if (prevErrorMessage !== currentErrorMessage){
      if (
        currentErrorMessage === "" ||
        currentErrorMessage === undefined ||
        currentErrorMessage === null
      ){
        this.setState({ isValid: true })
      } else {
        this.setState({ 
          errorMessage: currentErrorMessage,
          isValid: false
        })
      }
    }
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

  handleErrorStyle = () => {
    if(this.props.showError) {
      return this.state.isValid
    }
    return true
  }

  hasLabel = () => {
    return (this.state.isFocused || this.state.value.length > 0)
  }

  render() {
    const inputRender = (theme) => validatorPatterns[this.validatorType].mask ? (
      <MaskedInput
        disabled={this.props.disabled}
        id={this.props.id}
        isValid={this.handleErrorStyle()}
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
        isValid={this.handleErrorStyle()}
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
          isValid={this.handleErrorStyle()}
          theme={theme}>
          <Typography 
            color={
              this.handleErrorStyle() ? 
                this.state.isFocused ?
                  theme.colors.primaryColor :
                  theme.colors.darkGreyColor : 
                theme.colors.pinkColor
            }
            tag="span"
            type="label">
            <strong>
              {this.props.label}
            </strong>
          </Typography>
        </Input.Label>
        <Input.InputBackground
          className="Input__InputBackground"
          isFocused={this.state.isFocused}
          isValid={this.handleErrorStyle()}
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
          this.props.showError &&
          !this.state.isValid && (
            <Typography 
              color={theme.colors.pinkColor}
              tag="span"
              type="label">
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