import React, { useState } from 'react'
import PropTypes from 'prop-types'

import * as Checkbox from './Checkbox.style'

import IconManager from './../IconManager'

const CheckboxComponent = ({
  id,
  isChecked,
  onClickCheckbox,
  label,
  name,
  value,
}) => {
  const [checked, setChecked] = useState(false)
  const componentName = name ? name : id

  if (isChecked) {
    setChecked(true)
  }
  
  const handleCheckboxClick = () => {
    setChecked(!checked)
    onClickCheckbox && onClickCheckbox(checked)
  }

  const renderCheckbox = () => checked ? (
    <IconManager icon="CheckboxChecked"/>
  ) : (
    <IconManager icon="CheckboxUnchecked"/>
  )

  return (
    <Checkbox.Wrapper
      onClick={() => handleCheckboxClick()}>
      <Checkbox.Checkbox 
        checked={checked}
        id={id}
        name={componentName}
        type="checkbox"
        value={value}/>
      {renderCheckbox()}
      <Checkbox.Label htmlFor={id}>
        {label}
      </Checkbox.Label>
    </Checkbox.Wrapper>
  )
  
}

CheckboxComponent.propTypes = {
  id: PropTypes.string,
  isChecked: PropTypes.bool,
  name: PropTypes.string,
  onClickCheckbox: PropTypes.func,
  label: PropTypes.node,
  value: PropTypes.node,
}

export default CheckboxComponent