import React from 'react'
import PropTypes from 'prop-types'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import WindowedSelect from 'react-windowed-select'

const SelectMenuComponent = ({
  options,
  placeholder,
  onSelectChange,
  name,
  defaultInputValue
}) => {

  const styles = (theme) => {
    return {
      control: (styles, { isSelected, isFocused }) => ({
        ...styles,
        borderColor: isFocused ? theme.colors.primaryColor : isSelected ? theme.colors.primaryColor : 'white',
        boxShadow: '0px 5px 10px rgba(101, 101, 101, 0.05), 0px 5px 10px rgba(61, 61, 61, 0.1)',
        fontFamily: "'Rubik',sans-serif",
        fontWeight: '500',
        height: '48px',
        borderRadius: '4px',
        ':hover': {
          borderColor: isFocused ? theme.colors.primaryColor : isSelected ? theme.colors.primaryColor : 'white',
        }
      }),
      menu: (styles) => ({
        ...styles,
        fontFamily: "'Rubik',sans-serif",
        fontSize: '14px',
        color: '#4D4771'
      }),
      dropdownIndicator: (styles, { isSelected, isFocused }) => ({
        ...styles,
        color: theme.colors.primaryColor,
        border: 'none',
        ':hover': {
          color: theme.colors.darkerPrimaryColor
        }
      }),
      singleValue: (styles) => ({
        ...styles,
        color: '#4D4771',
        fontFamily: "'Rubik',sans-serif",
      }),
      indicatorSeparator: (styles) => ({
        border: 'none'
      }),
      placeholder: (styles) => ({
        ...styles,
        color: '#212121',
        fontWeight: '500',
        fontSize: '14px',
        fontFamily: "'Rubik',sans-serif",
      })
    }
  }

  const renderComponent = (theme) => (
    <WindowedSelect
      options={options}
      defaultInputValue={defaultInputValue}
      onChange={onSelectChange}
      name={name}
      placeholder={placeholder}
      styles={styles(theme)} />
  )

  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

SelectMenuComponent.propTypes = {
  options: PropTypes.any,
  placeholder: PropTypes.string,
  onSelectChange: PropTypes.func,
  name: PropTypes.string,
  defaultInputValue: PropTypes.any,
}
export default SelectMenuComponent
