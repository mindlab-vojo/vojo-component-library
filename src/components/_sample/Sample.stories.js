import React from 'react';
import Sample from '.';
import { withKnobs, text } from "@storybook/addon-knobs";
import { withA11y } from '@storybook/addon-a11y';

export default {
    title: 'sample',
    component: Sample,
    decorators: [withKnobs, withA11y]
}

export const component = () => {
    const name = text("name", "VOJO")
    return <Sample name={name}/>
}

component.story = {
    name: 'sample',
};
  