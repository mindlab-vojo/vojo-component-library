import phoneValidator from './phoneValidator'
import { cpfMaskRemover, cpfValidator } from './cpfValidator'
import { rgMaskRemover, rgValidator } from './rgValidator'
import { dateMaskRemover, dateValidator } from './dateValidator'
import { pisMaskRemover } from './pisValidator'

export const validatorTypes = {
  alphaNumeric: 'alphaNumeric',
  alphaNumericSpaced: 'alphaNumericSpaced',
  alphabeitcal: 'alphabeitcal',
  alphabeitcalSpaced: 'alphabeitcalSpaced',
  cep: 'cep',
  cpf: 'cpf',
  date: 'date',
  email: 'email',
  mobileNumber: 'mobileNumber',
  password: 'password',
  pis: 'pis',
  rg: 'rg'
}

export const validatorPatterns = {
  [validatorTypes.alphabetical]: {
    errorMessage: 'O valor não deve possuir espaçamento, números ou símbolos',
    mask: null,
    maskRemover: (value) => value,
    maxLength: null,
    minLength: null,
    regex: /^[A-Za-zÀ-ÖØ-öø-ÿ]*$/,
    specificValidation: null,
  },
  [validatorTypes.alphabeticalSpaced]: {
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
    errorMessage: 'O formato do e-mail é inválido',
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
    maskRemover: (value) => phoneValidator(value),
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
  [validatorTypes.cpf]: {
    errorMessage: 'Este CPF é inválido',
    mask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/],
    maskRemover: (value) => cpfMaskRemover(value),
    maxLength: 11,
    minLength: 11,
    regex: /[\s\S]+/g,
    specificValidation: (value) => cpfValidator(value),
  },
  [validatorTypes.pis]: {
    errorMessage: 'Este PIS é inválido',
    mask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/],
    maskRemover: (value) => pisMaskRemover(value),
    maxLength: 11,
    minLength: 11,
    regex: /[\s\S]+/g,
    specificValidation: null,
  },
  [validatorTypes.cep]: {
    errorMessage: 'Este CEP é inválido',
    mask: [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/],
    maskRemover: (value) => pisMaskRemover(value),
    maxLength: 8,
    minLength: 8,
    regex: /[\s\S]+/g,
    specificValidation: null,
  },
  [validatorTypes.date]: {
    errorMessage: 'Esta data é inválida',
    mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
    maskRemover: (value) => dateMaskRemover(value),
    maxLength: 10,
    minLength: 10,
    regex: /[\s\S]+/g,
    specificValidation: (value) => dateValidator(value),
  },
  [validatorTypes.rg]: {
    errorMessage: 'Este RG é inválido',
    mask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/],
    maskRemover: (value) => rgMaskRemover(value),
    maxLength: 9,
    minLength: 9,
    regex: /[\s\S]+/g,
    specificValidation: (value) => rgValidator(value),
  },
}
