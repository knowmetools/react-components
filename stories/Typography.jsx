import React from 'react';
import { storiesOf } from '@storybook/react';

import { Text } from '../src/typography';


storiesOf('Typography', module)
  .add('Basic Text', () => (
    <Text>This is some basic text.</Text>
  ));
