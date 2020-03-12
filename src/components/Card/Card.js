import React from 'react'
import PropTypes from 'prop-types'

import * as Card from './Card.style'

const CardComponent = ({ image, title, description }) => {
  return (
    <Card.Wrapper className="Card__Wrapper">
      <Card.UpperBody className="Card__Wrapper__UpperBody">
        <Card.Image 
          className="Card__Wrapper__UpperBody__Image"
          src={image}
        />
      </Card.UpperBody>
      <Card.LowerBody className="Card__Wrapper__LowerBody">
        <Card.Title className="Card__Wrapper__LowerBody__Title">
          {title}
        </Card.Title>
        <Card.Description className="Card__Wrapper__LowerBody__Description">
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
