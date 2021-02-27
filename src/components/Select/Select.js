import React from 'react'
import PropTypes from 'prop-types'

import IconManager from '../IconManager'
import Typography from '../Typography'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import Button from '../Button'

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '100%'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


const SelectMenuComponent = ({
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
  terms: PropTypes.object
}
export default SelectMenuComponent
