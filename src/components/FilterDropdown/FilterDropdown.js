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

  const renderComponent = theme => {
    
    const currentColor = isSelected 
      ? theme.colors.blackColor
      : theme.colors.whiteColor
    return (
      <FilterDropdown.Wrapper
        isSelected={isSelected}
        theme={theme}>
        <FilterDropdown.Text>
          <Typography 
            color={currentColor}
            tag="p"
            type="default">
            TESTE
          </Typography>
        </FilterDropdown.Text>
        <FilterDropdown.Icon>
          <IconManager 
            icon="ArrowDown"
            fill={currentColor}
          />
        </FilterDropdown.Icon>
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
  options: PropTypes.object,
  onSelectOption: PropTypes.func,
  placeholder: PropTypes.string,
}

export default FilterDropdownComponent
