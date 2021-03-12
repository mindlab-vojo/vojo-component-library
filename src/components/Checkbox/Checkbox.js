import React, { useState } from 'react'
import PropTypes from 'prop-types'
import * as Checkbox from './Checkbox.style'
import IconManager from './../IconManager'
import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
const CheckboxComponent = ({
  id,
  isChecked,
  onClickCheckbox,
  label,
  name,
  value,
  iconSize
}) => {
  const [checked, setChecked] = useState(isChecked ? true : false)
  const componentName = name ? name : id
  const handleCheckboxClick = () => {
    setChecked(!checked)
    onClickCheckbox && onClickCheckbox(checked)
  }
  const handleCheckboxChange = () => {
    // Clear warnings
  }
  const renderCheckbox = (theme) => checked ? (
    <IconManager
      icon="CheckboxChecked"
      fill={theme.colors.primaryColor}
      width={iconSize}
      height={iconSize} />
  ) : (
    <IconManager
      icon="CheckboxUnchecked"
      width={iconSize}
      height={iconSize} />
  )
  const component = (theme) => (
    <Checkbox.Wrapper>
      <Checkbox.Checkbox
        checked={checked}
        id={id}
        name={componentName}
        onChange={() => handleCheckboxChange()}
        type="checkbox"
        value={value} />
      <Checkbox.Click onClick={() => handleCheckboxClick()}>
        {renderCheckbox(theme)}
      </Checkbox.Click>
      <Checkbox.Label >
        {label}
      </Checkbox.Label>
    </Checkbox.Wrapper>
  )
  return (
    <ThemeConsumer>
      {({ theme }) => component(theme)}
    </ThemeConsumer>
  )
}
CheckboxComponent.propTypes = {
  iconSize: PropTypes.string,
  id: PropTypes.string,
  isChecked: PropTypes.bool,
  name: PropTypes.string,
  onClickCheckbox: PropTypes.func,
  label: PropTypes.node,
  value: PropTypes.node,
}
export default CheckboxComponent