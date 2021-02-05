import React from 'react';
import { withKnobs, text, color, select } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions'

import Snackbar from '.';
import { ThemeProvider } from "../../../src";
import categories from '../../../.storybook/categories';

export const snackbarError = () => {
  const backgroundColor = color("backgroundColor", "#FF5477")
  const buttonText = text("buttonText", "OK")
  const buttonTextColor = color("buttonTextColor", "#ffffff")
  const description = text("description", "Cupom inválido. Tente de novo.")
  const descriptionColor = color("descriptionColor", "#ffffff")
  const justifyText = text('justifyText', 'space-between')
  const onClickSnackbar = action("onClickSnackbar")

  return (
    <Snackbar
      backgroundColor={backgroundColor}
      buttonText={buttonText}
      buttonTextColor={buttonTextColor}
      description={description}
      descriptionColor={descriptionColor}
      descriptionFontSize={'16px'}
      justifyText={justifyText}
      onClickSnackbar={onClickSnackbar}/>
  )
}

export default {
  title: categories.Snackbar,
  name: 'SnackbarError',
  component: snackbarError,
  decorators: [
    withKnobs,
    withA11y,
    (story) => <ThemeProvider>{story()}</ThemeProvider>,
    (story) => <div style={{ display: "flex" }}>{story()}</div>,
  ],
}
