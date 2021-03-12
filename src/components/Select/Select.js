import React from 'react'
import PropTypes from 'prop-types'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'

import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
    width: '100%',
    fontFamily: "'Rubik', sans-serif",
    fontSize: '16px',
    letterSpacing: '0.25px',
  },
  label: {
    fontFamily: "'Rubik', sans-serif",
    backgroundColor: 'white',
    fontSize: '16px',
    letterSpacing: '0.25px',
  }
}))

const selectStyle = makeStyles({
  select: {
    backgroundColor: 'white',
    fontFamily: "'Rubik', sans-serif",
    fontSize: '16px',
    letterSpacing: '0.25px',
    color: '#4D4771',
    borderRadius: '4px',
    '&:focus': {
      backgroundColor: 'white',
    },
  },
  outlined: {
    border: '1px #4D4771 solid',
    borderRadius: '4px',
    fontFamily: "'Rubik', sans-serif",
    fontSize: '16px',
    letterSpacing: '0.25px',
  },
  icon: {
    color: '#391DDD'
  }
}, { name: 'MuiSelect' })

const label = makeStyles({
  shrink: {
    fontSize: '19px',
    fontWeight: '500',
    color: '#4d4771',
    fontFamily: "'Rubik', sans-serif",
    letterSpacing: '0.25px',
    padding: '0 4px',
  },
  outlined: {
    transform: 'translate(14px, 14px) scale(1)'
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
