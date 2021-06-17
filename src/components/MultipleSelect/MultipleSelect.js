import React from 'react'
import PropTypes from 'prop-types'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import WindowedSelect from 'react-windowed-select'

import {
  SortableContainer,
  SortableElement,
  sortableHandle,
} from 'react-sortable-hoc';

function arrayMove(array, from, to) {
  array = array.slice();
  array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
  return array;
}

const SortableMultiValue = SortableElement(props => {
  // this prevents the menu from being opened/closed when the user clicks
  // on a value to begin dragging it. ideally, detecting a click (instead of
  // a drag) would still focus the control and toggle the menu, but that
  // requires some magic with refs that are out of scope for this example
  const onMouseDown = e => {
    e.preventDefault();
    e.stopPropagation();
  };
  const innerProps = { ...props.innerProps, onMouseDown };
  return <components.MultiValue {...props} innerProps={innerProps} />;
});

const SelectMenuComponent = ({
  options,
  placeholder,
  onSelectChange,
  name,
  defaultSelectValue
}) => {

  const styles = (theme) => {
    return {
      control: (styles, { isSelected, isFocused }) => ({
        ...styles,
        borderColor: isFocused ? theme.colors.primaryColor : isSelected ? theme.colors.primaryColor : 'white',
        boxShadow: '0px 5px 10px rgba(101, 101, 101, 0.05), 0px 5px 10px rgba(61, 61, 61, 0.1)',
        fontFamily: "'Rubik',sans-serif",
        fontWeight: '500',
        height: '48px',
        borderRadius: '4px',
        ':hover': {
          borderColor: isFocused ? theme.colors.primaryColor : isSelected ? theme.colors.primaryColor : 'white',
        }
      }),
      menu: (styles) => ({
        ...styles,
        fontFamily: "'Rubik',sans-serif",
        fontSize: '14px',
        color: '#4D4771'
      }),
      dropdownIndicator: (styles) => ({
        ...styles,
        color: theme.colors.primaryColor,
        border: 'none',
        ':hover': {
          color: theme.colors.darkerPrimaryColor
        }
      }),
      singleValue: (styles) => ({
        ...styles,
        color: '#4D4771',
        fontFamily: "'Rubik',sans-serif",
      }),
      indicatorSeparator: (styles) => ({
        border: 'none'
      }),
      placeholder: (styles) => ({
        ...styles,
        color: theme.colors.primaryColor,
        fontWeight: '500',
        fontSize: '14px',
        fontFamily: "'Rubik',sans-serif",
      })
    }
  }



  const renderComponent = (theme) => (
    <WindowedSelect
      options={options}
      defaultValue={defaultSelectValue}
      onChange={onSelectChange}
      name={name}
      placeholder={placeholder}
      styles={styles(theme)} />
  )

  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

SelectMenuComponent.propTypes = {
  options: PropTypes.any,
  placeholder: PropTypes.string,
  onSelectChange: PropTypes.func,
  name: PropTypes.string,
  defaultSelectValue: PropTypes.any,
}
export default SelectMenuComponent
