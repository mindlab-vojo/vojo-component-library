import React from 'react'
import PropTypes from 'prop-types'

import * as Card from './Card.style'

function CardComponent({ 
  backgroundColor,
  children,
  hasPointer,
  onClickCard,
  padding,
}) {
  return (
    <Card.Card 
      backgroundColor={backgroundColor}
      className="Card"
      hasPointer={hasPointer}
      onClick={onClickCard}
      padding={padding}>
      {children}
    </Card.Card>
  )
}

CardComponent.propTypes = {
  backgroundColor: props.string,
  children: PropTypes.node,
  hasPointer: PropTypes.bool,
  onClickCard: PropTypes.func,
  padding: PropTypes.string,
}

CardComponent.defaultProps = {
  padding: "14px 10px"
}

export default CardComponent

