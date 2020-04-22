import Input from './../'

import  { validatorTypes } from '../../../utils/validators/validatorTypes'

class MobileInput extends Input {
  validatorType = validatorTypes.mobileNumber
}

export default MobileInput