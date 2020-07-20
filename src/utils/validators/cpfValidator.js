import { validate } from 'gerador-validador-cpf'

export const cpfMaskRemover = (value) => {
  const cpf = value.match(/[0-9]/g)
  if (cpf === null) {
    return ''
  }
  return cpf.join('')
}

export const cpfValidator = (value) => {
  return validate(value)
}