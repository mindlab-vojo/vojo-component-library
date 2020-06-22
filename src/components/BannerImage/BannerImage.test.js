import React from 'react';
import { render } from '@testing-library/react';

import BannerImage from './';
import { ThemeProvider } from './../../style/ThemeManager/ThemeProvider';

test('Test BannerImage component render', () => {
  const component = render(
    <ThemeProvider>
      <BannerImage
        imageUrl="https://russelservicos.com.br/wp-content/uploads/2016/01/balconista1.jpg"
        title="Balconista"
      />
    </ThemeProvider>
  );
  expect(component).toMatchSnapshot()
});
