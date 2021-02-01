import React from 'react'
import PropTypes from 'prop-types'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import * as ResearchCard from './ResearchCard.style'

const ResearchCardComponent = ({
  description,
  iconBackgroundColor,
  backgroundCard,
  lineHeight,
  onClickCard,
  buttonText,
  title,
}) => {

  const renderComponent = (theme) => (
    <ResearchCard.Container
      backgroundCard={backgroundCard}>
      <ResearchCard.IconWrapper>
        <ResearchCard.Icon
          iconBackgroundColor={iconBackgroundColor}>
                ?
        </ResearchCard.Icon>
      </ResearchCard.IconWrapper>
      <ResearchCard.TextContainer
        lineHeight={lineHeight}>
        <ResearchCard.Title>
          {title}
        </ResearchCard.Title>
        <ResearchCard.Description>
          {description}
        </ResearchCard.Description>
      </ResearchCard.TextContainer>
      <ResearchCard.Button
        onClick={onClickCard}>
        {buttonText}
      </ResearchCard.Button>
    </ResearchCard.Container>
  )
  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

ResearchCardComponent.propTypes = {
  description: PropTypes.string,
  backgroundCard: PropTypes.string,
  icon: PropTypes.string,
  iconBackgroundColor: PropTypes.string,
  lineHeight: PropTypes.string,
  onClickCard: PropTypes.func,
  title: PropTypes.string,
  buttonText: PropTypes.string,
}

ResearchCardComponent.defaultProps = {
  backgroundCard: '#E9E5FF',
  iconBackgroundColor: '#391DDD'
}

export default ResearchCardComponent
