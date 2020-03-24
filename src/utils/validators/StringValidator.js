export default class StringValidator {

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

export const validatorTypes = {
  alphaNumeric: 'alphaNumeric',
  alphaNumericSpaced: 'alphaNumericSpaced',
  alphabeitcal: 'alphabeitcal',
  alphabeitcalSpaced: 'alphabeitcalSpaced',
}

export const validatorPatterns = {
  [validatorTypes.alphabeitcal]: {
    errorMessage: 'O valor não deve possuir espaçamento, números ou símbolos',
    minLength: null,
    maxLength: null,
    regex: /^[A-Za-zÀ-ÖØ-öø-ÿ]*$/,
    specificValidation: null,
  },
  [validatorTypes.alphabeitcalSpaced]: {
    errorMessage: 'O valor não deve possuir números ou símbolos',
    minLength: null,
    maxLength: null,
    regex: /^[A-Za-zÀ-ÖØ-öø-ÿ ]*$/,
    specificValidation: null,
  },
  [validatorTypes.alphaNumeric]: {
    errorMessage: 'O valor não deve possuir espaçamento ou símbolos',
    minLength: null,
    maxLength: null,
    regex: /^[A-Za-zÀ-ÖØ-öø-ÿ0-9]*$/,
    specificValidation: null,
  },
  [validatorTypes.alphaNumericSpaced]: {
    errorMessage: 'O valor não deve possuir símbolos',
    minLength: null,
    maxLength: null,
    regex: /^[A-Za-zÀ-ÖØ-öø-ÿ0-9 ]*$/,
    specificValidation: null,
  },
}
