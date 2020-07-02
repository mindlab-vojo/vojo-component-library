import React from 'react';
import { render } from '@testing-library/react';

import ModuleCard from './';
import { ThemeProvider } from './../../style/ThemeManager/ThemeProvider';

test('Test ModuleCard component render', () => {
  const fakeFn = jest.fn()
  const component = render(
    <ThemeProvider>
      <ModuleCard 
        description="Just testing by"
        iconName="Check"
        iconBackgroundColor="#DF74A3"
        onClickCard={fakeFn}
        title="Just a Title"
        time="50min."/>
    </ThemeProvider>
  );
  expect(component).toMatchSnapshot()
});
