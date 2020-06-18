import React from 'react';
import { render } from '@testing-library/react';

import BannerCard from './';
import { ThemeProvider } from './../../style/ThemeManager/ThemeProvider';

test('Test BannerCard component render', () => {
  const fakeFn = jest.fn()
  const component = render(
    <ThemeProvider>
      <BannerCard 
        description="Entregador Mágico"
        id="card-id"
        onClickCard={fakeFn}
        title="Entregador Mágico"
      />
    </ThemeProvider>
  );
  expect(component).toMatchSnapshot()
});
