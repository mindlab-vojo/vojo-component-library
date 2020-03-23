// import React from 'react'
import PropTypes from 'prop-types'

import Input from './../'

import  { validatorTypes } from '../../../utils/validators/StringValidator'

class TextInput extends Input {
  static propTypes = {
  }
  validatorType = validatorTypes.alphabeitcalSpaced
}

export default TextInput