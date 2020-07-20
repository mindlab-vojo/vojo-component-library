import React,  { useState } from 'react'
import PropTypes from 'prop-types'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import * as FormRadio from './FormRadio.style'
import IconManager from '../IconManager'
import Typography from '../Typography'

const FormRadioComponent = ({
  description,
  hasToolTip,
  onClickOption,
  onClickToolTip,
  options,
  title,
  tooltipData,
}) => {

  const defaultOption = {
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
                fill={theme.colors.darkGreyColor}/>
            </FormRadio.RadioIcon>
            <Typography
              color={theme.colors.darkGreyColor}
              fontSize="14px">
              {option.title}
            </Typography>
          </FormRadio.Label>
        </FormRadio.Option>
      )
    })
  }

  const renderComponent = (theme) => (
    <FormRadio.Wrapper>
      <FormRadio.Header>
        <FormRadio.TitleWrapper>
          <FormRadio.Title>
            <Typography
              color={theme.colors.darkGreyColor}
              fontSize="16px"
              fontWeight="bold">
              {title}
            </Typography>
          </FormRadio.Title>
          <FormRadio.Description>
            <Typography
              color={theme.colors.darkGreyColor}
              fontSize="12px">
              {description}
            </Typography>
          </FormRadio.Description>
        </FormRadio.TitleWrapper>
        {
          hasToolTip &&(
            <FormRadio.Tooltip
              onClick={handleClickToolTip}>
              <IconManager 
                height="20px"
                width="20px"
                icon="HelpCircle"
                fill={theme.colors.darkGreyColor}/>
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

  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

FormRadioComponent.propTypes = {
  description: PropTypes.string,
  hasToolTip: PropTypes.bool,
  onClickOption: PropTypes.func,
  onClickToolTip: PropTypes.func,
  options: PropTypes.array,
  title: PropTypes.string,
  tooltipData: PropTypes.object,
}

export default FormRadioComponent
