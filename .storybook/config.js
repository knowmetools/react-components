import { configure } from '@storybook/react';


function loadStories() {
  require('../stories/Typography.jsx');
}


configure(loadStories, module);
