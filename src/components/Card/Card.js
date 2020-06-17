import React from 'react'
import PropTypes from 'prop-types'

import * as Card from './Card.style'

function CardComponent({ 
  children,
  hasPointer,
  padding,
}) {
  return (
    <Card.Card 
      className="Card"
      hasPointer={hasPointer}
      padding={padding}>
      {children}
    </Card.Card>
  )
}

CardComponent.propTypes = {
  children: PropTypes.node,
  hasPointer: PropTypes.bool,
  padding: PropTypes.string,
}

CardComponent.defaultProps = {
  padding: "14px 10px"
}

export default CardComponent

