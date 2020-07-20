import Input from './../'

import  { validatorTypes } from '../../../utils/validators/validatorTypes'

class CepInput extends Input {
  validatorType = validatorTypes.cep
}

export default CepInput