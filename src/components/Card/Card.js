import React from 'react'
import PropTypes from 'prop-types'

import * as Card from './Card.style'

function CardComponent({ 
  children,
  padding,
}) {
  return (
    <Card.Card 
      className="Card"
      padding={padding}>
      {children}
    </Card.Card>
  )
}

CardComponent.propTypes = {
  children: PropTypes.node,
  padding: PropTypes.string,
}

CardComponent.defaultProps = {
  padding: "14px 10px"
}

export default CardComponent

