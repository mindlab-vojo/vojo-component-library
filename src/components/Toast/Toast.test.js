import React from 'react';
import { render } from '@testing-library/react';
import Toast from './';

import { ThemeProvider } from './../../style/ThemeManager/ThemeProvider';

test('Test Toast component render', () => {
  const component = render(
    <ThemeProvider>
      <Toast
        title="Formulário de inscrição"
        description={(
          <>
            <span>- Just saying</span><br/>
            <span>- Just saying</span><br/>
            <span>- Just saying</span><br/>
          </>
        )}
      />
    </ThemeProvider>
  );
  expect(component).toMatchSnapshot()
});
