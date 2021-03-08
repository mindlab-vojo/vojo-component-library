import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'

import * as Radio from './Radio.style'

import IconManager from './../IconManager'

const RadioComponent = ({
  id,
  onClickRadio,
  label,
  name,
  value,
}) => {
  const [checked, setChecked] = useState(true)
  const componentName = name ? name : id

  const handleRadioClick = () => {
    setChecked(!checked)
    onClickRadio && onClickRadio(checked)
  }

  useEffect(() => {
    setChecked(!value)
  }, [value]);

  const handleRadioChange = () => {
    // Clear warnings
  }
  const renderComponent = (theme) => {
    return (
      <Radio.Wrapper
        onClick={() => handleRadioClick()}>
        <Radio.Radio
          checked={checked}
          id={id}
          name={componentName}
          onChange={() => handleRadioChange()}
          type="radio"
          value={value} />
        <IconManager
          height="20px"
          width="20px"
          icon={!checked ? "RadioChecked" : "RadioUnchecked"}
          fill={'#B8B5C6'} />
        <Radio.Label >
          {label}
        </Radio.Label>
      </Radio.Wrapper>
    )
  }
  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )

}

RadioComponent.propTypes = {
  id: PropTypes.string,
  isChecked: PropTypes.bool,
  name: PropTypes.string,
  onClickRadio: PropTypes.func,
  label: PropTypes.node,
  value: PropTypes.node,
}

export default RadioComponent