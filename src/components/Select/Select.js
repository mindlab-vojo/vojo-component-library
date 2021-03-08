import React from 'react'
import PropTypes from 'prop-types'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
    width: '100%'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


const SelectMenuComponent = ({
  defaultValue,
  options,
  value,
  onChangeSelect,
  inputLabel,
  variant
}) => {
  const classes = useStyles();
  const renderComponent = (theme) => (
    <FormControl variant={variant} className={classes.formControl}>
      <InputLabel>{inputLabel}</InputLabel>
      <Select
        native
        value={value}
        onChange={onChangeSelect}
        defaultValue={defaultValue}
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
