import React from 'react'
import { ThemeProvider } from "../src";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from '@storybook/addon-a11y';

export const themeContextDecorator = story => <ThemeProvider>{ story() }</ThemeProvider>

export default [withKnobs, withA11y, (story) => themeContextDecorator(story)]