export const validatorTypes = {
  alphaNumeric: 'alphaNumeric',
  alphaNumericSpaced: 'alphaNumericSpaced',
  alphabeitcal: 'alphabeitcal',
  alphabeitcalSpaced: 'alphabeitcalSpaced',
  mobileNumber: 'mobileNumber'
}

export const validatorPatterns = {
  [validatorTypes.alphabeitcal]: {
    errorMessage: 'O valor não deve possuir espaçamento, números ou símbolos',
    mask: null,
    maskRemover: (value) => value,
    maxLength: null,
    minLength: null,
    regex: /^[A-Za-zÀ-ÖØ-öø-ÿ]*$/,
    specificValidation: null,
  },
  [validatorTypes.alphabeitcalSpaced]: {
    errorMessage: 'O valor não deve possuir números ou símbolos',
    mask: null,
    maskRemover: (value) => value,
    maxLength: null,
    minLength: null,
    regex: /^[A-Za-zÀ-ÖØ-öø-ÿ ]*$/,
    specificValidation: null,
  },
  [validatorTypes.alphaNumeric]: {
    errorMessage: 'O valor não deve possuir espaçamento ou símbolos',
    mask: null,
    maskRemover: (value) => value,
    maxLength: null,
    minLength: null,
    regex: /^[A-Za-zÀ-ÖØ-öø-ÿ0-9]*$/,
    specificValidation: null,
  },
  [validatorTypes.alphaNumericSpaced]: {
    errorMessage: 'O valor não deve possuir símbolos',
    mask: null,
    maskRemover: (value) => value,
    maxLength: null,
    minLength: null,
    regex: /^[A-Za-zÀ-ÖØ-öø-ÿ0-9 ]*$/,
    specificValidation: null,
  },
  [validatorTypes.mobileNumber]: {
    errorMessage: 'O número de telefone é inválido',
    mask: ['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    maskRemover: (value) => value.match(/[0-9]/g).join(''),
    maxLength: 11,
    minLength: 11,
    regex: /^[0-9]{11}$/,
    specificValidation: null,
  },
}
