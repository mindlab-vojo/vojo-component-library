import React from 'react';
import { withKnobs, text, color, select } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions'

import Snackbar from '.';
import { ThemeProvider } from "../../../src";
import categories from '../../../.storybook/categories';

export const snackbarCompany = () => {
  const backgroundColor = color("backgroundColor", "#7f51e0")
  const height = text('height', 'fit-content')
  const justifyText = text('justifyText', 'space-between')
  const onClickSnackbar = action("onClickSnackbar")
  const title = text("title", "Entregador")
  const titleColor = color("titleColor", "#ffffff")
  const titleSize = text("titleSize", "24px")
  const borderRadius = text("borderRadius", "10px")
  const img = () => {
    return (
      <img width={'100px'} src={'https://s3.amazonaws.com/static.vojo.com.br/prd/images/james_logo.png'}></img>
    )
  }

  return (
    <div style={{ height: '1000px', width: '100%' }}>
      <Snackbar
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        justifyText={justifyText}
        onClickSnackbar={onClickSnackbar}
        height={height}
        title={title}
        titleColor={titleColor}
        titleSize={titleSize}
        image={img()} />
    </div>

  )
}

export default {
  title: categories.Snackbar,
  name: 'SnackbarCompany',
  component: snackbarCompany,
  decorators: [
    withKnobs,
    withA11y,
    (story) => <ThemeProvider>{story()}</ThemeProvider>,
    (story) => <div style={{ display: "flex" }}>{story()}</div>,
  ],
}
