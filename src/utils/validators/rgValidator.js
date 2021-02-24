
export const rgMaskRemover = (value) => {
  const rg = value.match(/[0-9]/g)
  if (rg === null) {
    return ''
  }
  return rg.join('')
}

export const rgValidator = (value) => {
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{1,2})(\d{3})(\d{3})(\d{1})$/, "$1.$2.$3-$4");

  return value
}