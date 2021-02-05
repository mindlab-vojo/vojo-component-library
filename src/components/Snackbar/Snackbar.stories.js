import React from 'react';
import { withKnobs, text, color, select } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions'

import Snackbar from '.';
import { ThemeProvider } from "../../../src";
import categories from '../../../.storybook/categories';

export const snackbar = () => {
  const backgroundColor = color("backgroundColor", "#391DDD")
  const buttonText = text("buttonText", "VER")
  const buttonTextColor = color("buttonTextColor", "#ffffff")
  const description = text("description", "Toque aqui para inserir!")
  const descriptionColor = color("descriptionColor", "#DDDDDD")
  const iconColor = color("iconColor", "#ffffff")
  const iconHeight = text('iconHeight', '27')
  const iconName = text('iconName', 'Coupon')
  const iconWidth = text('iconWidth', '27')
  const justifyText = text('justifyText', 'space-between')
  const onClickSnackbar = action("onClickSnackbar")
  const title = text("title", "Tem algum cupom?")
  const titleColor = color("titleColor", "#ffffff")

  return (
    <Snackbar
      backgroundColor={backgroundColor}
      buttonText={buttonText}
      buttonTextColor={buttonTextColor}
      description={description}
      descriptionColor={descriptionColor}
      iconColor={iconColor}
      iconHeight={iconHeight}
      iconName={iconName}
      iconWidth={iconWidth}
      justifyText={justifyText}
      onClickSnackbar={onClickSnackbar}
      title={title}
      titleColor={titleColor} />
  )
}

export default {
  title: categories.Snackbar,
  name: 'Snackbar',
  component: snackbar,
  decorators: [
    withKnobs,
    withA11y,
    (story) => <ThemeProvider>{story()}</ThemeProvider>,
    (story) => <div style={{ display: "flex" }}>{story()}</div>,
  ],
}
