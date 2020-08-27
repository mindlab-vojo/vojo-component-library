import React from 'react';
import { render } from '@testing-library/react';

import SideMenu from './';
import { ThemeProvider } from './../../style/ThemeManager/ThemeProvider';

test('Test SideMenu component render', () => {
  const fakeFn = jest.fn()
  const component = render(
    <ThemeProvider>
      <SideMenu 
        animationDuration={1}
        buttons={[
          {
            text: 'Sair',
            func: () => console.log('click')
          },
        ]}
        items={[
          {
            icon: 'Suitcase',
            text: 'Oportunidades',
            func: () => console.log('click')
          },
          {
            icon: 'Course',
            text: 'Cursos Gratuitos',
            func: () => console.log('click')
          }
        ]}
        onClickClose={fakeFn}
        onClickOutside={fakeFn}
        show={true}
        terms={{
          text: 'termos de uso e política de privacidade',
          func: () => console.log('click')
        }}/>
    </ThemeProvider>
  );
  expect(component).toMatchSnapshot()
});
