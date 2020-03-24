import { validatorPatterns } from './validatorTypes'

class StringValidator {

  constructor(value, validatorPattern, options) {
    this.errorMessage = ''
    this.isValid = true
    this.options = options
    this.value = value
    this.validatorPattern = validatorPatterns[validatorPattern]
  }

  checkLength = () => {
    if (this.validatorPattern.minLength) {
      this.checkMinLength()
    }
    if (this.validatorPattern.maxLength) {
      this.checkMaxLength()
    }
  }

  checkMinLength = () => {
    const isValid = Boolean(this.value.length <= this.validatorPattern.minLength)
    const errorMessage = isValid ? '' : `O valor deve ser maior que ${this.validatorPattern.minLength} caracteres`
    this.setValidationProps(isValid, errorMessage)
  }

  checkMaxLength = () => {
    const isValid = Boolean(this.value.length >= this.validatorPattern.maxLength)
    const errorMessage = isValid ? '' : `O valor deve ser maior que ${this.validatorPattern.minLength} caracteres`
    this.setValidationProps(isValid, errorMessage)
  }

  checkRegexPattern = () => {
    const isValid = Boolean(this.value.match(this.validatorPattern.regex))
    const errorMessage = isValid ? '' : this.validatorPattern.errorMessage
    this.setValidationProps(isValid, errorMessage)
  }

  checkSpecificValidation = () => {
    if (this.validatorPattern.specificValidation) {
      const isValid = Boolean(this.validatorPattern.specificValidation(this.value))
      const errorMessage = isValid ? '' : this.validatorPattern.errorMessage
      this.setValidationProps(isValid, errorMessage)
    }
  }
  
  setValidationProps = (isValid, errorMessage) => {
    this.isValid = isValid
    this.errorMessage = errorMessage
  }

  createValidationObject = () => {
    return {
      errorMessage: this.errorMessage,
      isValid: this.isValid,
      value: this.value,
    }
  }

  validate = () => {
    const validations = [
      this.checkLength,
      this.checkRegexPattern,
      this.checkSpecificValidation,
    ]
    
    for (let i = 0; i < validations.length; i++) {
      const validation = validations[i];
      console.log(validation)
      validation()

      if (!this.isValid) {
        return this.createValidationObject()
      }
    }

    return this.createValidationObject()
  }
}

export default StringValidator