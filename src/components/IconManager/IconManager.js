import React from 'react'
import PropTypes from 'prop-types'

import ArrowDown from './Icons/ArrowDown'
import ArrowLeft from './Icons/ArrowLeft'
import ArrowRigth from './Icons/ArrowRigth'
import ArrowUp from './Icons/ArrowUp'
import Avatar from './Icons/Avatar'
import CancelOutlined from './Icons/CancelOutlined'
import Check from './Icons/Check'
import CheckboxChecked from './Icons/CheckboxChecked'
import CheckboxUnchecked from './Icons/CheckboxUnchecked'
import CheckOutlined from './Icons/CheckOutlined'
import Close from './Icons/Close'
import Coupon from './Icons/Coupon'
import Course from './Icons/Course'
import Exclamation from './Icons/Exclamation'
import Hamburger from './Icons/Hamburger'
import HelpCircle from './Icons/HelpCircle'
import Lock from './Icons/Lock'
import Pencil from './Icons/Pencil'
import Question from './Icons/Question'
import RadioChecked from './Icons/RadioChecked'
import RadioUnchecked from './Icons/RadioUnchecked'
import Suitcase from './Icons/Suitcase'
import SuitcaseArrow from './Icons/SuitcaseArrow'
import VisibilityOff from './Icons/VisibilityOff'
import VisibilityOn from './Icons/VisibilityOn'
import Clock from './Icons/Clock'

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
  Avatar: Avatar,
  ArrowDown: ArrowDown,
  ArrowLeft: ArrowLeft,
  ArrowRigth: ArrowRigth,
  ArrowUp: ArrowUp,
  CancelOutlined: CancelOutlined,
  Check: Check,
  CheckboxChecked: CheckboxChecked,
  CheckboxUnchecked: CheckboxUnchecked,
  CheckOutlined: CheckOutlined,
  Close: Close,
  Coupon: Coupon,
  Course: Course,
  Exclamation: Exclamation,
  Hamburger: Hamburger,
  HelpCircle: HelpCircle,
  Lock: Lock,
  Pencil: Pencil,
  Question: Question,
  RadioChecked: RadioChecked,
  RadioUnchecked: RadioUnchecked,
  Suitcase: Suitcase,
  SuitcaseArrow: SuitcaseArrow,
  VisibilityOff: VisibilityOff,
  VisibilityOn: VisibilityOn,
  Clock: Clock
}

export default IconManager
