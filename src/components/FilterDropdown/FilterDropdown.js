import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Typography from '../Typography'
import IconManager from '../IconManager'
import * as FilterDropdown from './FilterDropdown.style'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'

const FilterDropdownComponent = ({
  defaultOption,
  options,
  onSelectOption,
  placeholder,
}) => {
  const [isSelected, setIsSelected] = useState(Boolean(defaultOption))
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const handleDropdownClick = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionSelect = (option) => {
    setIsSelected(true)
    setSelectedOption(option)
    setIsOpen(false)
    onSelectOption && onSelectOption(option)
  }

  const renderComponent = theme => {
    const currentColor = isSelected 
      ? theme.colors.whiteColor
      : theme.colors.blackColor

    const currentIcon = isOpen 
      ? 'ArrowUp'
      : 'ArrowDown'
    
    return (
      <FilterDropdown.Wrapper>
        <FilterDropdown.Input
          className="FilterDropdown"
          isSelected={isSelected}
          onClick={() => handleDropdownClick()}
          theme={theme}>
          <FilterDropdown.Text
            className="FilterDropdown__Text">
            <Typography 
              color={currentColor}
              tag="p"
              type="default">
              {isSelected ? selectedOption.name : placeholder}
            </Typography>
          </FilterDropdown.Text>
          <FilterDropdown.Icon
            className="FilterDropdown__Icon">
            <IconManager 
              icon={currentIcon}
              fill={currentColor}
            />
          </FilterDropdown.Icon>
        </FilterDropdown.Input>
        {
          isOpen
            ? (
              <FilterDropdown.Dropdown 
                className="FilterDropdown__Dropdown"
                theme={theme}>
                {
                  options.map(option => (
                    <FilterDropdown.Item
                      key={option.id}
                      className="FilterDropdown__Item"
                      onClick={() => handleOptionSelect(option)}
                      theme={theme}>
                      <Typography 
                        color={theme.colors.whiteColor}
                        tag="p"
                        type="default">
                        {option.name}
                      </Typography>
                    </FilterDropdown.Item>
                  ))
                }
              </FilterDropdown.Dropdown>
            ) : null
        }
        
      </FilterDropdown.Wrapper>
    )}

  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

FilterDropdownComponent.propTypes = {
  defaultOption: PropTypes.any,
  options: PropTypes.array,
  onSelectOption: PropTypes.func,
  placeholder: PropTypes.string,
}

export default FilterDropdownComponent
