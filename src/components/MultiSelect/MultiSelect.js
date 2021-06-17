import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import { Input, CheckboxContainer, Container } from './MultiSelect.styles'
import { useInput } from '../../hooks/useInput'
import Typography from '../Typography'
import { Checkbox } from '../Checkbox'

const MultiSelect = ({
  initialValue = '',
  options,
  placeholder,
  onChange,
  name,
  defaultSelectValue,
  className
}) => {
  const [inputValue, setValue] = useState(initialValue)
  const onInputChange = e => setValue(e.target.value)

  const compareOptionToInputValue = ({ label }) => {
    const lowerCaseInputValue = inputValue.toLowerCase()
    const lowerCaseLabel = label.toLowerCase()

    return lowerCaseLabel.includes(lowerCaseInputValue)
  }

  const filteredOptions = options.filter(compareOptionToInputValue)

  const renderComponent = ({ colors }) => (
    <Container className={className}>
      <Input 
        value={inputValue}
        onChange={onInputChange} 
        highlightColor={colors.primaryColor}
      />
      <CheckboxContainer 
        multiple 
        onChange={onChange} 
        name={name}
        placeholder={placeholder}
      >
        {filteredOptions.map(({ value, label }) => 
          <label key={value} htmlFor={value} tabIndex='1'>
            <input type="checkbox" id={value} value={value} /> 
            <Typography type='default'>
              {label}
            </Typography>
          </label>
        )}
      </CheckboxContainer>
    </Container>
  )

  return ( 
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

MultiSelect.propTypes = {
  initialValue: PropTypes.string,
  options: PropTypes.any,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  defaultSelectValue: PropTypes.any,
  className: PropTypes.string
}
export default MultiSelect
