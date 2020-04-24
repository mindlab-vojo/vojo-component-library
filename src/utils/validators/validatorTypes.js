export const validatorTypes = {
  alphaNumeric: 'alphaNumeric',
  alphaNumericSpaced: 'alphaNumericSpaced',
  alphabeitcal: 'alphabeitcal',
  alphabeitcalSpaced: 'alphabeitcalSpaced',
  email: 'email',
  mobileNumber: 'mobileNumber',
  password: 'password'
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
  [validatorTypes.freeText]: {
    errorMessage: '',
    mask: null,
    maskRemover: (value) => value,
    maxLength: null,
    minLength: null,
    regex: /[\s\S]+/g,
    specificValidation: null,
  },
  [validatorTypes.email]: {
    errorMessage: 'O número formato do e-mail é inválido',
    mask: null,
    maskRemover: (value) => value,
    maxLength: null,
    minLength: null,
    regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
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
  [validatorTypes.password]: {
    errorMessage: 'Esta senha é inválida',
    mask: null,
    maskRemover: (value) => value,
    maxLength: 16,
    minLength: 6,
    regex: /[\s\S]+/g,
    specificValidation: null,
  },
}
