import React from 'react';
import Sample from '.';
import { withKnobs, text, color } from "@storybook/addon-knobs";
import { withA11y } from '@storybook/addon-a11y';

export default {
    title: 'Sample',
    component: Sample,
    decorators: [withKnobs, withA11y]
}

export const component = () => {
    const textColor = color("color", "#5D5D5D")
    const name = text("name", "VOJO")
    return <Sample color={textColor} name={name}/>
}

component.story = {
    name: 'sample',
};
  