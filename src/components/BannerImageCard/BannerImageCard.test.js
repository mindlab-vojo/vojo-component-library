import React from 'react';
import { render } from '@testing-library/react';

import BannerImageCard from './';
import { ThemeProvider } from './../../style/ThemeManager/ThemeProvider';

test('Test BannerImageCard component render', () => {
  const fakeFn = jest.fn()
  const component = render(
    <ThemeProvider>
      <BannerImageCard
        imageUrl="https://russelservicos.com.br/wp-content/uploads/2016/01/balconista1.jpg"
        onClickCard={fakeFn}
        subtitle="Testando o subtítulo."
        title="Balconista"
      />
    </ThemeProvider>
  );
  expect(component).toMatchSnapshot()
});
