import React from 'react'
import PropTypes from 'prop-types'

import * as FilterDropdown from './FilterDropdown.style'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'

const FilterDropdownComponent = ({
  options,
  onSelectOption,
}) => {

  const renderComponent = theme => (
    <FilterDropdown.Wrapper>

    </FilterDropdown.Wrapper>
  )

  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

FilterDropdownComponent.propTypes = {
  options: PropTypes.object,
  onSelectOption: PropTypes.func
}

export default FilterDropdownComponent
