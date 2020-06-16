import React from 'react';
import { render } from '@testing-library/react';

import JobCard from './';
import { ThemeProvider } from './../../style/ThemeManager/ThemeProvider';

test('Test JobCard component render', () => {
  const fakeFn = jest.fn()
  const component = render(
    <ThemeProvider>
      <JobCard 
        companyNumber={5}
        id="card-id"
        imageUrl="https://cdnb.artstation.com/p/assets/images/images/011/745/187/large/emma-areum-kim-kiki10-01psd.jpg"
        isNew={true}
        isUnavailable={false}
        locations={[{
          "country": "Brasil",
          "states": ["SP", "RJ"]
        }]}
        onClickCard={fakeFn}
        slots={200}
        title="Entregador Mágico"/>
    </ThemeProvider>
  );
  expect(component).toMatchSnapshot()
});
