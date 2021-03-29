import React from 'react'
import PropTypes from 'prop-types'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import * as FormSelect from './FormSelect.style'
import WindowedSelect from 'react-windowed-select'
import Typography from '../Typography'

const FormSelectComponent = ({
  options,
  placeholder,
  onSelectChange,
  name,
  title,
  titleSize,
  titleMarginBottom,
  defaultSelectValue,
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
      dropdownIndicator: (styles) => ({
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
        color: theme.colors.primaryColor,
        fontWeight: '500',
        fontSize: '14px',
        fontFamily: "'Rubik',sans-serif",
      })
    }
  }

  const renderComponent = (theme) => (
    <FormSelect.Wrapper>
        <FormSelect.Title titleMarginBottom={titleMarginBottom}>
        <Typography
        color={'#4D4771'}
        type={'title'}
        fontSize={titleSize}
        fontWeight="700"
        lineHeight={'18px'}>
        {title}
        </Typography>
        </FormSelect.Title>
        <WindowedSelect
        options={options}
        defaultValue={defaultSelectValue}
        onChange={onSelectChange}
        name={name}
        placeholder={placeholder}
        styles={styles(theme)} />
    </FormSelect.Wrapper>
  )

  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

FormSelectComponent.propTypes = {
  options: PropTypes.any,
  placeholder: PropTypes.string,
  onSelectChange: PropTypes.func,
  name: PropTypes.string,
  defaultSelectValue: PropTypes.any,
  title: PropTypes.string,
  titleSize: PropTypes.string,
  titleMarginBottom: PropTypes.string
}

FormSelectComponent.defaultProps = {
    titleMarginBottom: "4px",
    titleSize: "14px"
}
export default FormSelectComponent
