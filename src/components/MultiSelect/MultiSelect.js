import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import { Input, CheckboxContainer } from './MultiSelect.styles'

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

  const compareOptionToInputValue = ({ label }) => {
    const lowerCaseInputValue = inputValue.toLowerCase()
    const lowerCaseLabel = label.toLowerCase()

    return lowerCaseLabel.includes(lowerCaseInputValue)
  }

  const filteredOptions = options.filter(compareOptionToInputValue)

  const renderComponent = (theme) => (
    <div className={className}>
      <Input value={inputValue} onChange={e => setValue(e.target.value)} />
      <CheckboxContainer 
        multiple 
        onChange={onChange} 
        name={name}
        placeholder={placeholder}
      >
        {inputValue && filteredOptions.map(({ value, label }) => 
          <label key={value} htmlFor={value}>
            <input type="checkbox" id={value} />
            {label}
          </label>
        )}
      </CheckboxContainer>
    </div>
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
