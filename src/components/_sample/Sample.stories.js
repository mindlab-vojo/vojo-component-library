import React from 'react';
import Sample from '.';
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
    title: 'sample',
    component: Sample,
    decorators: [withKnobs]
}

export const component = () => {
    const name = text("name", "VOJO")
    return <Sample name={name}/>
}

component.story = {
    name: 'sample',
};
  