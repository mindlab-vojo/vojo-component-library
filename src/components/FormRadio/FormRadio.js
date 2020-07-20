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

  const [selectedOption, setSelectedOption] = useState(null)

  const handleClickOption = (option) => {
    setSelectedOption(option)
    onClickOption && onClickOption(option)
  }

  const renderOptions = () => 
    options.map(option => (
      <FormRadio.Option
        key={option.id}
        onClick={handleClickOption}>
        <FormRadio.HiddenRadio
          selected={option.id === selectedOption.id}
        />
        <FormRadio.RadioIcon>
          <IconManager 
            height="20px"
            width="20px"
            icon={
              option.id === selectedOption.id ?
                "RadioChecked" : 
                "RadioUnchecked"
            }/>
        </FormRadio.RadioIcon>
        <FormRadio.Label>
          {option.title}
        </FormRadio.Label>
      </FormRadio.Option>
    ))

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

FormRadioComponent.propTypes = {
  description: PropTypes.string,
  hasToolTip: PropTypes.bool,
  onClickOption: PropTypes.func,
  onClickToolTip: PropTypes.func,
  options: PropTypes.array,
  title: PropTypes.string,
}

export default FormRadioComponent
