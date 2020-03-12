import React from 'react'
import PropTypes from 'prop-types'

import * as Card from './Card.style'

import ThemeConsumer from '../../style/themes/ThemeProvider'

const CardComponent = ({ image, title, description }) => {
  return (
    <ThemeConsumer>
      {
        ({ theme }) => (
          <Card.Wrapper 
            className="Card__Wrapper"
            theme={theme}>
            <Card.UpperBody className="Card__Wrapper__UpperBody">
              <Card.Image 
                className="Card__Wrapper__UpperBody__Image"
                src={image}
              />
            </Card.UpperBody>
            <Card.LowerBody className="Card__Wrapper__LowerBody">
              <Card.Title
                className="Card__Wrapper__LowerBody__Title"
                theme={theme}>
                {title}
              </Card.Title>
              <Card.Description className="Card__Wrapper__LowerBody__Description">
                {description}
              </Card.Description>
            </Card.LowerBody>
          </Card.Wrapper>
        )
      }
    </ThemeConsumer>
  )
}

CardComponent.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default CardComponent
