import React from 'react'
import PropTypes from 'prop-types'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import Select from "../Select/Select"
import * as FormSelect from './FormSelect.style'
import Typography from '../Typography'

const FormSelectComponent = ({
  hasError,
  id,
  description,
  errorMessage,
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
    <FormSelect.Wrapper id={id}>
      <FormSelect.Title titleMargin={titleMargin}>
        <Typography
          color={hasError ? theme.colors.pinkColor : theme.colors.greyColor}
          type={'title'}
          fontSize={titleSize}
          fontWeight="700"
          lineHeight={'18px'}>
          {title}
        </Typography>
      </FormSelect.Title>
      {
        description && (
          <FormSelect.Description>
            <Typography
              color={hasError ? theme.colors.pinkColor : theme.colors.lightGreyColor}
              fontSize="12px">
              {description}
            </Typography>
          </FormSelect.Description>
        )
      }
      {
        hasError && (
          <FormSelect.Description>
            <Typography
              color={theme.colors.pinkColor}
              fontSize="12px">
              {errorMessage}
            </Typography>
          </FormSelect.Description>
        )
      }
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
  titleMargin: PropTypes.string
}

FormSelectComponent.defaultProps = {
  titleMargin: '0 0 4px 0',
  titleSize: "14px"
}
export default FormSelectComponent
