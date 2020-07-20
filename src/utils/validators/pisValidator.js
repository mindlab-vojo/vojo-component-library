export const pisMaskRemover = (value) => {
  const pis = value.match(/[0-9]/g)
  if (pis === null) {
    return ''
  }
  return pis.join('')
}