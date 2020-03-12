import React from 'react';
import { render } from '@testing-library/react';
import Card from './';

import { ThemeProvider } from './../../ThemeManager/ThemeProvider';

test('Test Card component render', () => {
  const component = render(
    <ThemeProvider>
      <Card 
        title="Testing"
        description="Testing this component with props"
        image="https://miro.medium.com/max/4240/0*6lzpRfcdt7wU0HAN."/>
    </ThemeProvider>
  );
  expect(component).toMatchSnapshot()
});
