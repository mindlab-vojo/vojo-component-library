import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import * as FormCheckbox from './FormCheckbox.style'
import IconManager from '../IconManager'
import Typography from '../Typography'
import Radio from '../Radio'

const FormCheckboxComponent = ({
  description,
  errorMessage,
  hasAllOptions,
  hasError,
  hasToolTip,
  labelSelectAll,
  onClickOption,
  onClickToolTip,
  options,
  preSelectedOptions,
  title,
  titleSize,
  titleMarginBottom,
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
  const [selectAll, setSelectAll] = useState(false)

  const handleClickOption = (option) => {
    hasOptionOnSelectedOptions(option)
      ? removeOption(option)
      : addOption(option)
  }

  const handleSelectAllOptions = (chooseAll) => {
    setSelectAll(chooseAll)
    selectAllOptions(chooseAll)
  }

  const hasOptionOnSelectedOptions = (option) => {
    const searchForOptionResult = selectedOptions.find(
      selectedOption => selectedOption.id === option.id
    )
    return Boolean(searchForOptionResult)
  }

  const selectAllOptions = (chooseAll) => {
    const allOptions = chooseAll ? options.filter(item => item.code !== 'ALL') : []
    setSelectedOptions(allOptions)
    onClickOption && onClickOption(allOptions)
  }

  const addOption = (option) => {
    const newSelectedOptions = [...selectedOptions]
    newSelectedOptions.push(option)
    setSelectedOptions(newSelectedOptions)
    if (hasAllOptions && newSelectedOptions.length === options.filter(item => item.code !== 'ALL').length) {
      setSelectAll(true)
    }
    onClickOption && onClickOption(newSelectedOptions)
  }

  const removeOption = (option) => {
    const newSelectedOptions = selectedOptions.filter(
      selectedOption => selectedOption.id !== option.id
    )
    setSelectAll(false)
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
                fill={isSelected ? theme.colors.primaryColor : '#B8B5C6'} />
            </FormCheckbox.CheckboxIcon>
            <Typography
              color={'#4D4771'}
              fontSize="14px"
              lineHeight={'18px'}>
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
            <FormCheckbox.Title titleMarginBottom={titleMarginBottom}>
              <Typography
                color={hasError ? theme.colors.pinkColor : theme.colors.greyColor}
                type={'title'}
                fontSize={titleSize}
                fontWeight="700"
                lineHeight={'18px'}>
                {title}
              </Typography>
            </FormCheckbox.Title>
            {
              description && (
                <FormCheckbox.Description>
                  <Typography
                    color={hasError ? theme.colors.pinkColor : theme.colors.lightGreyColor}
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
                    color={theme.colors.pinkColor}
                    fontSize="12px">
                    {errorMessage}
                  </Typography>
                </FormCheckbox.Description>
              )
            }
          </FormCheckbox.TitleWrapper>
          {
            hasToolTip && (
              <FormCheckbox.Tooltip
                onClick={handleClickToolTip}>
                <IconManager
                  height="20px"
                  width="20px"
                  icon="HelpCircle"
                  fill={theme.colors.blackColor} />
              </FormCheckbox.Tooltip>
            )
          }
        </FormCheckbox.Header>
        <FormCheckbox.OptionsWrapper>
          <FormCheckbox.OptionsWrapper>
            {hasAllOptions &&
              <FormCheckbox.Radio>
                <Radio value={selectAll} onClickRadio={() => handleSelectAllOptions(!selectAll)} label={labelSelectAll} />
              </FormCheckbox.Radio>}
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
  hasAllOptions: PropTypes.bool,
  hasError: PropTypes.bool,
  hasToolTip: PropTypes.bool,
  onClickOption: PropTypes.func,
  onClickToolTip: PropTypes.func,
  labelSelectAll: PropTypes.string,
  options: PropTypes.array,
  preSelectedOptions: PropTypes.array,
  title: PropTypes.string,
  titleSize: PropTypes.string,
  titleMarginBottom: PropTypes.string,
  tooltipData: PropTypes.object,
}

FormCheckboxComponent.defaultProps = {
  titleMarginBottom: "4px",
  titleSize: "14px",
  labelSelectAll: "Todos os dias"
}

export default FormCheckboxComponent
