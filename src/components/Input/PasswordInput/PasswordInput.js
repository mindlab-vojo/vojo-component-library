import Input from './../'

import  { validatorTypes } from '../../../utils/validators/validatorTypes'

class PasswordInput extends Input {
  validatorType = validatorTypes.password
}

export default PasswordInput