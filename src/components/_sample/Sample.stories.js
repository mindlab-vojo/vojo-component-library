import React from 'react';
import Sample from '.';

export default {
    title: 'sample',
    component: Sample
}

export const ToStorybook = () => <Sample name="Leonardo"/>

ToStorybook.story = {
    name: 'sample',
};
  