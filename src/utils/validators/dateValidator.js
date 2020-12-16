import moment from "moment"

export const dateMaskRemover = (value) => {
  const date = value.split('/').reverse().join('/')
  return date
}

export const dateValidator = (value) => {
  const date = dateMaskRemover(value)
  return moment(date, "DD-MM-YYYY").isValid()
}