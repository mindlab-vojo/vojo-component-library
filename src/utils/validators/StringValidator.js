import { validatorPatterns } from './validatorTypes'
import genBind from 'generator-bind'

class StringValidator {

  constructor(value, validatorPattern, options) {
    this.errorMessage = ''
    this.isValid = true
    this.options = options
    this.value = value
    this.validatorPattern = validatorPatterns[validatorPattern]
  }

  checkIsRequired = () => {
    if (this.options.isRequired) {
      console.log((this.value && this.value.length > 0))
      const isValid = Boolean(this.value && this.value.length > 0)
      const errorMessage = isValid ? '' : `Este campo é obrigatório`
      this.setValidationProps(isValid, errorMessage)
    }
  }

  checkMinLength = () => {
    if (this.validatorPattern.minLength) {
      const isValid = Boolean(this.value.length >= this.validatorPattern.minLength)
      const errorMessage = isValid ? '' : `O valor deve ser maior que ${this.validatorPattern.minLength} caracteres`
      this.setValidationProps(isValid, errorMessage)
    }
  }

  checkMaxLength = () => {
    if (this.validatorPattern.maxLength) {
      const isValid = Boolean(this.value.length <= this.validatorPattern.maxLength)
      const errorMessage = isValid ? '' : `O valor deve ser menor que ${this.validatorPattern.maxLength} caracteres`
      this.setValidationProps(isValid, errorMessage)
    }
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
    const validationGenerator = genBind(
      this, 
      function* validator() {
        yield this.checkIsRequired
        yield this.checkMinLength
        yield this.checkMaxLength
        yield this.checkRegexPattern
        yield this.checkSpecificValidation
      }
    )

    for (let validation of validationGenerator()) {
      validation()
      if (!this.isValid) {
        return this.createValidationObject()
      }
    }

    return this.createValidationObject()
  }
}

export default StringValidator