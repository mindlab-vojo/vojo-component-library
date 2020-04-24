import Input from './../'

import  { validatorTypes } from '../../../utils/validators/validatorTypes'

class TextInput extends Input {
  validatorType = validatorTypes.password
}

export default TextInput