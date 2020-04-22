class InputMask {

  constructor (maskPattern) {
    this.alpha = "A"
    this.cleanInput = null
    this.maskedInput = null
    this.number = "1"
    this.placeholder = "_"
    this.maskPattern = maskPattern
  }
  
  matchMask = (value) => {
    const splitPattern = this.maskPattern.split('')
    const splitValue = value.split('')

    const splitNewValue = splitPattern.map((patternCharacter, index) => {
      const valueCharacter = splitValue[index]
      return this.matchCharacterToPattern(patternCharacter, valueCharacter)
    })

    return splitNewValue.join('')    
  }

  matchCharacterToPattern = (patternCharacter, valueCharacter) => {
    if (valueCharacter === undefined) {
      return this.matchUndefinedCharacters(patternCharacter)
    }
    if (patternCharacter === this.alpha) {
      return this.matchAlphaCharacters(valueCharacter)
    }
    if (patternCharacter === this.number) {
      return this.matchNumberCharacters(valueCharacter)
    }
    return patternCharacter    
  }

  matchUndefinedCharacters = (patternCharacter) => {
    if (patternCharacter === this.alpha || 
        patternCharacter === this.number){
      return this.placeholder
    }
    return patternCharacter
  }

  matchAlphaCharacters = (valueCharacter) => {
    if (valueCharacter.match(/[a-zA-Z]/)) {
      return valueCharacter
    }
    return this.placeholder
  }

  matchNumberCharacters = (valueCharacter) => {
    if (valueCharacter.match(/[0-9]/)) {
      return valueCharacter
    }
    return this.placeholder
  }

}

export default InputMask