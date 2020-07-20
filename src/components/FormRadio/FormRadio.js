import React,  { useState } from 'react'
import PropTypes from 'prop-types'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import * as FormRadio from './FormRadio.style'
import IconManager from '../IconManager'

const FormRadioComponent = ({
  description,
  hasToolTip,
  onClickOption,
  onClickToolTip,
  options,
  title,
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

  const renderOptions = () => {
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
                }/>
            </FormRadio.RadioIcon>
            {option.title}
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

          </FormRadio.Title>
          <FormRadio.Description>
            
          </FormRadio.Description>
        </FormRadio.TitleWrapper>
        <FormRadio.Tooltip>
          <IconManager 
            height="20px"
            width="20px"
            icon="HelpCircle"/>
        </FormRadio.Tooltip>
      </FormRadio.Header>
      <FormRadio.OptionsWrapper>
        <FormRadio.OptionsWrapper>
          {
            renderOptions()
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


export default FormRadioComponent
