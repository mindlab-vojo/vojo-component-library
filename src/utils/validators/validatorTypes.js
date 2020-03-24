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
