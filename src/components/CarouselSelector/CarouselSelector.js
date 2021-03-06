import React, { useState } from 'react'
import PropTypes from 'prop-types'

import * as CarouselSelector from './CarouselSelector.style'

import ThemeConsumer from '../../style/ThemeManager/ThemeProvider'
import Typography from '../Typography'
import Spinner from '../Spinner'

const CarouselSelectorComponent = ({ 
  description,
  isLoading,
  items,
  onClickItem,
}) => {
  const [selectedItem, setSelectedItem] = useState(items[0])

  const handleSelectItem = (id) => {
    let currentItemIndex
    items.filter((item, index) => {
      if (item.id === id) {
        currentItemIndex = index
      }
    })
    setSelectedItem(items[currentItemIndex])
    onClickItem && onClickItem(items[currentItemIndex])
  }

  const renderCircles = (theme) => items.map(item => (
    <CarouselSelector.Circle
      key={item.id}
      onClick={() => handleSelectItem(item.id)}
      theme={theme}
      isSelected={item.id === selectedItem.id}
    >
      <CarouselSelector.TextWrapper>
        <Typography
          color={item.id === selectedItem.id ? theme.colors.whiteColor : theme.colors.blackColor}
          fontWeight="bolder">
          {item.title}
        </Typography>
      </CarouselSelector.TextWrapper>
    </CarouselSelector.Circle>
  ))

  const renderComponent = (theme) => (
    <CarouselSelector.Wrapper>
      <CarouselSelector.Carousel>
        {renderCircles(theme)}
      </CarouselSelector.Carousel>
      <CarouselSelector.Description>
        {
          isLoading ? (
            <Spinner spinnerArea="50px"/>
          ) : (
            <Typography>
              {description}
            </Typography>
          )
        }
      </CarouselSelector.Description>
    </CarouselSelector.Wrapper>
  )

  return (
    <ThemeConsumer>
      {({ theme }) => renderComponent(theme)}
    </ThemeConsumer>
  )
}

CarouselSelectorComponent.propTypes = {
  description: PropTypes.string,
  isLoading: PropTypes.bool,
  items: PropTypes.array,
  onClickItem: PropTypes.func,
}

export default CarouselSelectorComponent
