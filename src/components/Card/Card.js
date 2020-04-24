import React from 'react'
import PropTypes from 'prop-types'

import * as Card from './Card.style'

function CardComponent({ children }) {
  return (
    <Card.Card className="Card">
      {children}
    </Card.Card>
  )
}

CardComponent.propTypes = {
  children: PropTypes.node
}

export default CardComponent

