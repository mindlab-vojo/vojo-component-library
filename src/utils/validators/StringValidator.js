export const validatorTypes = {
  alphaNumeric: 'alphaNumeric',
  alphaNumericSpaced: 'alphaNumericSpaced',
  alphabeitcal: 'alphabeitcal',
  alphabeitcalSpaced: 'alphabeitcalSpaced',
}

export const validatorPatterns = {
  [validatorTypes.alphaNumeric]: {
    minLength: null,
    maxLength: null,
    regex: /[A-Za-zÀ-ÖØ-öø-ÿ ]/,
  }
}

class StringValidator {

  constructor(value, validatorPattern, options) {
    this.value = value
    this.validatorPattern = validatorPatterns[validatorPattern],
    this.options = options
  }

  checkLength = () => {
    if (this.validatorPattern.minLength) {
      if (this.value.length <= this.validatorPattern.minLength){
        return false
      }
    }
    if (this.validatorPattern.maxLength) {
      if (this.value.length >= this.validatorPattern.maxLength){
        return false
      }
    }
    return true
  }

  checkRegexPattern = () => {
    
  }

}

export default StringValidator