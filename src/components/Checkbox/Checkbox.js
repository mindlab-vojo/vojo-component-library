import React, { useState } from 'react'
import PropTypes from 'prop-types'

import * as Checkbox from './Checkbox.style'

const CheckboxComponent = ({
  isChecked,
  inClickCheckbox,
  value, 
}) => {
  
  const [checked, setChecked] = useState(false)

  if (isChecked) {
    setChecked(true)
  }

  const renderCheckbox = () => checked ? (
    null
  ) : (
    null
  )

  return (
    <Checkbox.Wrapper>
        
    </Checkbox.Wrapper>
  )
  
}

CheckboxComponent.propTypes = {
  prop: PropTypes
}

export default CheckboxComponent