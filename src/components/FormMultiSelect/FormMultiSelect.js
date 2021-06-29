import React from 'react'
import PropTypes from 'prop-types'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import MultipleSelect from "../MultipleSelect/MultipleSelect"
import * as FormMultiSelect from './FormMultiSelect.style'
import Typography from '../Typography'

const FormMultiSelectComponent = ({
  hasError,
  id,
  description,
  errorMessage,
  title,
  titleSize,
  titleMargin = '0.5em',
  options,
  placeholder,
  onSelectChange,
  name,
  defaultSelectValue, 
  value,
  setSelected
}) => {

  const renderComponent = (theme) => (
    <FormMultiSelect.Wrapper id={id}>
      <FormMultiSelect.Title titleMargin={titleMargin}>
        <Typography
          color={hasError ? theme.colors.pinkColor : theme.colors.greyColor}
          type={'title'}
          fontSize={titleSize}
          fontWeight="700"
          lineHeight={'18px'}>
          {title}
        </Typography>
      </FormMultiSelect.Title>
      {
        description && (
          <FormMultiSelect.Description>
            <Typography
              color={hasError ? theme.colors.pinkColor : theme.colors.lightGreyColor}
              fontSize="12px">
              {description}
            </Typography>
          </FormMultiSelect.Description>
        )
      }
      {
        hasError && (
          <FormMultiSelect.Description>
            <Typography
              color={theme.colors.pinkColor}
              fontSize="12px">
              {errorMessage}
            </Typography>
          </FormMultiSelect.Description>
        )
      }
      <MultipleSelect
        options={options}
        defaultSelectValue={defaultSelectValue}
        onSelectChange={onSelectChange}
        name={name}
        placeholder={placeholder}
        value={value}
        setSelected={setSelected}
      />
    </FormMultiSelect.Wrapper>
  )

  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

FormMultiSelectComponent.propTypes = {
  id: PropTypes.string,
  hasError: PropTypes.bool,
  description: PropTypes.string,
  errorMessage: PropTypes.string,
  options: PropTypes.any,
  placeholder: PropTypes.string,
  onSelectChange: PropTypes.func,
  name: PropTypes.string,
  defaultSelectValue: PropTypes.any,
  title: PropTypes.string,
  titleSize: PropTypes.string,
  titleMargin: PropTypes.string,
  value: PropTypes.any,
  setSelected: PropTypes.any
}

FormMultiSelectComponent.defaultProps = {
  titleMargin: '0 0 4px 0',
  titleSize: "14px"
}
export default FormMultiSelectComponent
