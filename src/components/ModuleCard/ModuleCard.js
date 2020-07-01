import React from 'react'
import PropTypes from 'prop-types'

import Card from '../Card'
import Typography from '../Typography'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import * as ModuleCard from './BannerImage.style'

const ModuleCardComponent = ({
  description,
  imageUrl,
  onClickCard,
  title,
  time,
}) => {

  const renderComponent = (theme) => (
    <Card>

    </Card>
  )
  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

ModuleCardComponent.propTypes = {
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  onClickCard: PropTypes.func,
  title: PropTypes.string,
  time: PropTypes.string,
}

export default ModuleCardComponent
