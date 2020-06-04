import React from 'react'
import PropTypes from 'prop-types'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'

const JobCardComponent = ({
  companyNumber,
  id,
  imageUrl,
  isNew,
  isUnavailable,
  linkUrl,
  locations,
  slots,
  title,
}) => {
  const renderComponent = (theme) => (
    <div>
      
    </div>
  )

  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

JobCardComponent.propTypes = {
  companyNumber: PropTypes.number,
  id: PropTypes.string,
  imageUrl: PropTypes.string,
  isNew: PropTypes.bool,
  isUnavailable: PropTypes.bool,
  linkUrl: PropTypes.string,
  locations: PropTypes.array,
  slots: PropTypes.number,
  title: PropTypes.string,
}

export default JobCardComponent
