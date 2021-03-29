import React from 'react'
import PropTypes from 'prop-types'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import Select from "../Select/Select"
import * as FormSelect from './FormSelect.style'
import Typography from '../Typography'

const FormSelectComponent = ({
  title,
  titleSize,
  titleMarginBottom,
  options,
  placeholder,
  onSelectChange,
  name,
  defaultSelectValue
}) => {

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
        <Select
         options={options}
         defaultValue={defaultSelectValue}
         onChange={onSelectChange}
         name={name}
         placeholder={placeholder}
        />
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
