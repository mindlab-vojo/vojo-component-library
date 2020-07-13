import React from 'react';
import { render } from '@testing-library/react';

import Modal from './';
import { ThemeProvider } from './../../style/ThemeManager/ThemeProvider';

test('Test Modal component render', () => {
  const component = render(
    <ThemeProvider>
      <Modal
        cardWidth="350px">
        <p>Test</p>
      </Modal>
    </ThemeProvider>
  );
  expect(component).toMatchSnapshot()
});
