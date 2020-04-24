import Input from './../'

import  { validatorTypes } from '../../../utils/validators/validatorTypes'

class TextInput extends Input {
  validatorType = validatorTypes.freeText
}

export default TextInput