import * as React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import theme from '../src/theme';


function loadStories() {
  require('../stories/Typography.tsx');
  require('../stories/Container.tsx');
}


addDecorator(story => (
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>));


configure(loadStories, module);
