import React, { useState } from 'react'
import PropTypes from 'prop-types'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import * as FormRadio from './FormRadio.style'
import IconManager from '../IconManager'
import Typography from '../Typography'

const FormRadioComponent = ({
  description,
  errorMessage,
  hasError,
  hasToolTip,
  onClickOption,
  onClickToolTip,
  options,
  preSelectedOption,
  title,
  titleSize,
  titleMarginBottom,
  tooltipData,
}) => {

  const getPreselectedOption = () => {
    return options.find(option => option.id === preSelectedOption)
  }

  const defaultOption = preSelectedOption
    ? getPreselectedOption()
    : {
      id: null,
      title: null,
      value: null
    }
  const [selectedOption, setSelectedOption] = useState(defaultOption)

  const handleClickOption = (option) => {
    setSelectedOption(option)
    onClickOption && onClickOption(option)
  }

  const handleClickToolTip = () => {
    onClickToolTip && onClickToolTip(tooltipData)
  }

  const renderOptions = (theme) => {
    return options.map(option => {
      const isSelected = option.id === selectedOption.id

      return (
        <FormRadio.Option
          key={option.id}
          onClick={() => handleClickOption(option)}>
          <FormRadio.HiddenRadio
            checked={isSelected}
            type="radio"
            value={option.value}
            id={option.id}
            onChange={() => null}
          />
          <FormRadio.Label
            htmlFor={option.id}>
            <FormRadio.RadioIcon>
              <IconManager
                height="20px"
                width="20px"
                icon={
                  isSelected ?
                    "RadioChecked" :
                    "RadioUnchecked"
                }
                fill={isSelected ? theme.colors.primaryColor : '#B8B5C6'} />
            </FormRadio.RadioIcon>
            <Typography
              color={'#4D4771'}
              fontSize="14px"
              lineHeight={'18px'}>
              {option.title}
            </Typography>
          </FormRadio.Label>
        </FormRadio.Option>
      )
    })
  }

  const renderComponent = (theme) => {
    return (
      <FormRadio.Wrapper>
        <FormRadio.Header>
          <FormRadio.TitleWrapper>
            <FormRadio.Title titleMarginBottom={titleMarginBottom}>
              <Typography
                color={hasError ? theme.colors.pinkColor : theme.colors.greyColor}
                type={'title'}
                fontSize={titleSize}
                fontWeight="700"
                lineHeight={'18px'}>
                {title}
              </Typography>
            </FormRadio.Title>
            {
              description && (
                <FormRadio.Description>
                  <Typography
                    color={hasError ? theme.colors.pinkColor : theme.colors.lightGreyColor}
                    fontSize="12px">
                    {description}
                  </Typography>
                </FormRadio.Description>
              )
            }
            {
              hasError && (
                <FormRadio.Description>
                  <Typography
                    color={theme.colors.pinkColor}
                    fontSize="12px">
                    {errorMessage}
                  </Typography>
                </FormRadio.Description>
              )
            }
          </FormRadio.TitleWrapper>
          {
            hasToolTip && (
              <FormRadio.Tooltip
                onClick={handleClickToolTip}>
                <IconManager
                  height="20px"
                  width="20px"
                  icon="HelpCircle"
                  fill={theme.colors.blackColor} />
              </FormRadio.Tooltip>
            )
          }
        </FormRadio.Header>
        <FormRadio.OptionsWrapper>
          <FormRadio.OptionsWrapper>
            {
              renderOptions(theme)
            }
          </FormRadio.OptionsWrapper>
        </FormRadio.OptionsWrapper>
      </FormRadio.Wrapper>
    )
  }

  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

FormRadioComponent.propTypes = {
  description: PropTypes.string,
  errorMessage: PropTypes.string,
  hasError: PropTypes.bool,
  hasToolTip: PropTypes.bool,
  onClickOption: PropTypes.func,
  onClickToolTip: PropTypes.func,
  options: PropTypes.array,
  preSelectedOption: PropTypes.string,
  title: PropTypes.string,
  titleSize: PropTypes.string,
  titleMarginBottom: PropTypes.string,
  tooltipData: PropTypes.object,
}

FormRadioComponent.defaultProps = {
  titleMarginBottom: "4px",
  titleSize: "14px"
}

export default FormRadioComponent
