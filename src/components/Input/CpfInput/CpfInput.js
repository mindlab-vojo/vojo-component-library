import Input from './../'

import  { validatorTypes } from '../../../utils/validators/validatorTypes'

class CpfInput extends Input {
  validatorType = validatorTypes.cpf
}

export default CpfInput