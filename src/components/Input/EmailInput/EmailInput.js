import Input from './../'

import  { validatorTypes } from '../../../utils/validators/validatorTypes'

class EmailInput extends Input {
  validatorType = validatorTypes.email
}

export default EmailInput