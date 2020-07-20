import React from 'react'
import PropTypes from 'prop-types'

import ArrowDown from './Icons/ArrowDown'
import ArrowLeft from './Icons/ArrowLeft'
import ArrowRigth from './Icons/ArrowRigth'
import ArrowUp from './Icons/ArrowUp'
import Check from './Icons/Check'
import CheckboxChecked from './Icons/CheckboxChecked'
import CheckboxUnchecked from './Icons/CheckboxUnchecked'
import Close from './Icons/Close'
import Exclamation from './Icons/Exclamation'
import HelpCircle from './Icons/HelpCircle'
import Lock from './Icons/Lock'
import Pencil from './Icons/Pencil'
import RadioChecked from './Icons/RadioChecked'
import RadioUnchecked from './Icons/RadioUnchecked'
import VisibilityOff from './Icons/VisibilityOff'
import VisibilityOn from './Icons/VisibilityOn'

const IconManager = ({ height, icon, fill, width }) => {

  const Icon = iconList[icon]

  return (
    <Icon
      height={height}
      fill={fill}
      width={width}
    />
  )
}

IconManager.propTypes = {
  height: PropTypes.string,
  fill: PropTypes.string,
  icon: PropTypes.string,
  width: PropTypes.string
}

export const iconList = {
  ArrowDown: ArrowDown,
  ArrowLeft: ArrowLeft,
  ArrowRigth: ArrowRigth,
  ArrowUp: ArrowUp,
  Check: Check,
  CheckboxChecked: CheckboxChecked,
  CheckboxUnchecked: CheckboxUnchecked,
  Close: Close,
  Exclamation: Exclamation,
  HelpCircle: HelpCircle,
  Lock: Lock,
  Pencil: Pencil,
  RadioChecked: RadioChecked,
  RadioUnchecked: RadioUnchecked,
  VisibilityOff: VisibilityOff,
  VisibilityOn: VisibilityOn
}

export default IconManager
