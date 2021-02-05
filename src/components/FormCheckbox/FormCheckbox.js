import React,  { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import * as FormCheckbox from './FormCheckbox.style'
import IconManager from '../IconManager'
import Typography from '../Typography'

const FormCheckboxComponent = ({
  description,
  errorMessage,
  hasError,
  hasToolTip,
  onClickOption,
  onClickToolTip,
  options,
  preSelectedOptions,
  title,
  tooltipData,
}) => {
  const createPreselectedOptions = () => {
    const newOptionsToState = []

    for (let i = 0; i < preSelectedOptions.length; i++) {
      const preSelectedOption = preSelectedOptions[i];
      newOptionsToState.push(
        options.find(option => option.id === preSelectedOption)
      )
    }
    
    return newOptionsToState
  }

  const defaultOption = preSelectedOptions ? createPreselectedOptions() : []
  const [selectedOptions, setSelectedOptions] = useState(defaultOption)

  const handleClickOption = (option) => {
    hasOptionOnSelectedOptions(option)
      ? removeOption(option)
      : addOption(option)
  }

  const hasOptionOnSelectedOptions = (option) => {
    const searchForOptionResult = selectedOptions.find(
      selectedOption => selectedOption.id === option.id
    )
    return Boolean(searchForOptionResult)
  }

  const addOption = (option) => {
    const newSelectedOptions = [...selectedOptions]
    newSelectedOptions.push(option)
    setSelectedOptions(newSelectedOptions)
    onClickOption && onClickOption(newSelectedOptions)
  }

  const removeOption = (option) => {
    const newSelectedOptions = selectedOptions.filter(
      selectedOption => selectedOption.id !== option.id
    )
    setSelectedOptions(newSelectedOptions)
    onClickOption && onClickOption(newSelectedOptions)
  }

  const handleClickToolTip = () => {
    onClickToolTip && onClickToolTip(tooltipData)
  }

  const renderOptions = (theme) => {
    return options.map(option => {
      const isSelected = hasOptionOnSelectedOptions(option)
      return (
        <FormCheckbox.Option
          key={option.id}>
          <FormCheckbox.HiddenCheckbox
            checked={isSelected}
            type="checkbox"
            value={option.value}
            id={option.id}
            onChange={() => null}
          />
          <FormCheckbox.Label
            htmlFor={option.id}
            onClick={() => handleClickOption(option)}>
            <FormCheckbox.CheckboxIcon>
              <IconManager 
                height="20px"
                width="20px"
                icon={
                  isSelected ?
                    "CheckboxChecked" : 
                    "CheckboxUnchecked"
                }
                fill={theme.colors.blackColor}/>
            </FormCheckbox.CheckboxIcon>
            <Typography
              color={theme.colors.blackColor}
              fontSize="14px">
              {option.title}
            </Typography>
          </FormCheckbox.Label>
        </FormCheckbox.Option>
      )
    })
  }

  const renderComponent = (theme) => {
    return (
      <FormCheckbox.Wrapper>
        <FormCheckbox.Header>
          <FormCheckbox.TitleWrapper>
            <FormCheckbox.Title>
              <Typography
                color={hasError ? theme.colors.redColor : theme.colors.blackColor}
                fontSize="16px"
                fontWeight="500">
                {title}
              </Typography>
            </FormCheckbox.Title>
            {
              description && (
                <FormCheckbox.Description>
                  <Typography
                    color={hasError ? theme.colors.redColor : theme.colors.blackColor}
                    fontSize="12px">
                    {description}
                  </Typography>
                </FormCheckbox.Description>
              )
            }
            {
              hasError && (
                <FormCheckbox.Description>
                  <Typography
                    color={theme.colors.redColor}
                    fontSize="12px">
                    {errorMessage}
                  </Typography>
                </FormCheckbox.Description>
              )
            }
          </FormCheckbox.TitleWrapper>
          {
            hasToolTip &&(
              <FormCheckbox.Tooltip
                onClick={handleClickToolTip}>
                <IconManager 
                  height="20px"
                  width="20px"
                  icon="HelpCircle"
                  fill={theme.colors.blackColor}/>
              </FormCheckbox.Tooltip>
            )
          }
        </FormCheckbox.Header>
        <FormCheckbox.OptionsWrapper>
          <FormCheckbox.OptionsWrapper>
            {
              renderOptions(theme)
            }
          </FormCheckbox.OptionsWrapper>
        </FormCheckbox.OptionsWrapper>
      </FormCheckbox.Wrapper>
    )
  }

  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

FormCheckboxComponent.propTypes = {
  description: PropTypes.string,
  errorMessage: PropTypes.string,
  hasError: PropTypes.bool,
  hasToolTip: PropTypes.bool,
  onClickOption: PropTypes.func,
  onClickToolTip: PropTypes.func,
  options: PropTypes.array,
  preSelectedOptions: PropTypes.array,
  title: PropTypes.string,
  tooltipData: PropTypes.object,
}

export default FormCheckboxComponent
