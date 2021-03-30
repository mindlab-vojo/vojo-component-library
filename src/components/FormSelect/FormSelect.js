import React from 'react'
import PropTypes from 'prop-types'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import Select from "../Select/Select"
import * as FormSelect from './FormSelect.style'
import Typography from '../Typography'

const FormSelectComponent = ({
  title,
  titleSize,
  titleMargin,
  options,
  placeholder,
  onSelectChange,
  name,
  defaultSelectValue
}) => {

  const renderComponent = (theme) => (
    <FormSelect.Wrapper>
        <FormSelect.Title titleMargin={titleMargin}>
            <Typography
            color={'#666666'}
            type={'title'}
            fontSize={titleSize}
            fontWeight="700"
            lineHeight={'18px'}>
            {title}
            </Typography>
        </FormSelect.Title>
        <Select
         options={options}
         defaultSelectValue={defaultSelectValue}
         onSelectChange={onSelectChange}
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
  titleMargin: PropTypes.string
}

FormSelectComponent.defaultProps = {
    titleMargin: '0 0 4px 0',
    titleSize: "14px"
}
export default FormSelectComponent
