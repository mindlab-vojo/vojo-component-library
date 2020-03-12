import React from 'react'
import PropTypes from 'prop-types'

import * as Card from './Card.style'

const CardComponent = ({ image, title, description }) => {
  return (
    <Card.Wrapper className="Card__Wrapper">
      <Card.UpperBody>
        <Card.Image src={image}/>
      </Card.UpperBody>
      <Card.LowerBody>
        <Card.Title>
          {title}
        </Card.Title>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.LowerBody>
    </Card.Wrapper>
  )
}

CardComponent.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default CardComponent
