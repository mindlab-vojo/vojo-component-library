import React from 'react';
import { withKnobs, text, number, boolean, object, color } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions'

import JobCard from '.';
import { ThemeProvider } from "../../../src";
import categories from '../../../.storybook/categories';

export const jobCard = () => {
  const locationsList = [{
    "country": "Brasil",
    "states": ["SP", "RJ"]
  }]
  const borderRadius = text('borderRadius', '50%')
  const companyNumber = number('companyNumber', 5)
  const description = text('description', '')
  const freelance = boolean('freelance', false)
  const id = text('id', 'card-id')
  const imageUrl = text('imageUrl', 'https://cdnb.artstation.com/p/assets/images/images/011/745/187/large/emma-areum-kim-kiki10-01psd.jpg')
  const isNew = boolean('isNew', true)
  const isUnavailable = boolean('isUnavailable', false)
  const justifyContent = text('justifyContent', 'space-between')
  const locations = object('locations', locationsList)
  const locationsOn = boolean('locationsOn', true)
  const onClickCard = action('onClickCard')
  const showCountry = boolean('showCountry', false)
  const slots = number('slots', 200)
  const subtitle = text('subtitle', '')
  const subtitleColor = color('subtitleColor', '')
  const title = text('title', 'Entregador Mágico')
  const titleSize = text('titleSize', '14px')
  const titleColor = color('titleColor', '')
  const stateNumber = number('stateNumber', 4)

  return (
    <JobCard
      borderRadius={borderRadius}
      companyNumber={companyNumber}
      description={description}
      freelance={freelance}
      id={id}
      imageUrl={imageUrl}
      isNew={isNew}
      isUnavailable={isUnavailable}
      justifyContent={justifyContent}
      locations={locations}
      locationsOn={locationsOn}
      onClickCard={onClickCard}
      showCountry={showCountry}
      slots={slots}
      subtitle={subtitle}
      subtitleColor={subtitleColor}
      title={title}
      titleColor={titleColor}
      titleSize={titleSize}
      stateNumber={stateNumber}
    />
  )
}

export default {
  title: categories.Cards,
  name: 'JobCard',
  component: jobCard,
  decorators: [
    withKnobs,
    withA11y,
    (story) => <ThemeProvider>{story()}</ThemeProvider>,
    (story) => <div style={{ display: "flex" }}>{story()}</div>,
  ],
}
