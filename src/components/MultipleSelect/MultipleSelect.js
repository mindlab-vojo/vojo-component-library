import React from 'react';
import PropTypes from 'prop-types'
import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'

import Select, { components } from 'react-select';
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

const MultipleSelect = SortableElement(props => {
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

const SortableMultiValueLabel = sortableHandle(props => (
  <components.MultiValueLabel {...props} />
));

const SortableSelect = SortableContainer(Select);

export default function MultiSelectSort({ options, onSelectChange, value, setSelected, placeholder }) {
  const onSortEnd = ({ oldIndex, newIndex }) => {
    const newValue = arrayMove(value, oldIndex, newIndex);
    setSelected(newValue);
  };

  const styles = (theme) => {
    return {
      control: (styles, { isSelected, isFocused }) => ({
        ...styles,
        borderColor: isFocused ? theme.colors.primaryColor : isSelected ? theme.colors.primaryColor : 'white',
        boxShadow: '0px 5px 10px rgba(101, 101, 101, 0.05), 0px 5px 10px rgba(61, 61, 61, 0.1)',
        fontFamily: "'Rubik',sans-serif",
        fontWeight: '500',
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
      indicatorSeparator: () => ({
        border: 'none'
      }),
      placeholder: (styles) => ({
        ...styles,
        color: theme.colors.primaryColor,
        fontWeight: '500',
        fontSize: '14px',
        fontFamily: "'Rubik',sans-serif",
      }),
      multiValue: () => ({
        ...styles,
        display: 'flex',
        borderRadius: '100px',
        background: '#F4F4F4',
        margin: '0.2em',
        padding: '0.1em'
      }),
      multiValueRemove: styles => ({
        ...styles,
        borderRadius: '100px',
        color: '#9E9E9E',
        ':hover': {
          ...styles[':hover'],
          color: "#DE350B"
        }
      }),
      multiValueLabel: styles => ({
        ...styles,
        fontWeight: 400,
        fontSize: '0.75rem'
      })
    }
  }

  const onChange = newValue => onSelectChange(newValue === null ? undefined : newValue)

  const renderComponent = (theme) => (
    <SortableSelect
      useDragHandle
      // react-sortable-hoc props:
      axis="xy"
      onSortEnd={onSortEnd}
      distance={4}
      // small fix for https://github.com/clauderic/react-sortable-hoc/pull/352:
      getHelperDimensions={({ node }) => node.getBoundingClientRect()}
      // react-select props:
      isMulti
      options={options}
      value={value}
      onChange={onChange}
      components={{
        MultiValue: MultipleSelect,
        MultiValueLabel: SortableMultiValueLabel,
      }}
      closeMenuOnSelect={false}
      styles={styles(theme)}
      placeholder={placeholder}
    />
  )

  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}



MultiSelectSort.propTypes = {
  options: PropTypes.any,
  placeholder: PropTypes.string,
  onSelectChange: PropTypes.func,
  name: PropTypes.string,
  defaultSelectValue: PropTypes.any,
  value: PropTypes.any,
  setSelected: PropTypes.any
}
