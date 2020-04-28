export default (value) => {
  const phone = value.match(/[0-9]/g)
  if (phone === null) {
    return ''
  }
  return phone.join('')
}