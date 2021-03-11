import React from 'react'
import PropTypes from 'prop-types'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles({
  formControl: {
    minWidth: 120,
    width: '100%'
  },
  label: {
    backgroundColor: 'white'
  }
})

const selectStyle = makeStyles({
  select: {
    backgroundColor: 'white',
    '&:focus': {
      backgroundColor: 'white'
    }
  },
  outlined: {
    border: '2px #666666 solid'
  }
}, { name: 'MuiSelect' })

const label = makeStyles({
  shrink: {
    fontSize: '19px',
    fontWeight: 'bold',
    color: '#4d4771'
  }
}, { name: 'MuiInputLabel' })

const SelectMenuComponent = ({
  defaultValue,
  options,
  value,
  onChangeSelect,
  inputLabel,
  variant
}) => {
  const classes = useStyles()
  const classSelect = selectStyle()
  const classInputLabel = label()

  const renderComponent = (theme) => (
    <FormControl variant={variant} className={classes.formControl}>
      <InputLabel className={classes.label}>{inputLabel}</InputLabel>
      <Select
        native
        value={value}
        onChange={onChangeSelect}
        defaultValue={defaultValue}
        className={classSelect}
      >
        <option aria-label="None" value="" />
        {options.map(item => (
          <option key={item.code} value={item.code}>{item.description}</option>
        ))}
      </Select>
    </FormControl>
  )

  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

SelectMenuComponent.propTypes = {
  options: PropTypes.any,
  value: PropTypes.any,
  onChangeSelect: PropTypes.func,
  inputLabel: PropTypes.string,
  variant: PropTypes.string,
  terms: PropTypes.object,
  defaultValue: PropTypes.string
}
export default SelectMenuComponent
