import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Heading, Paragraph } from '../src/typography';


storiesOf('Typography', module)
  .add('Basic Text', () => (
    <div>
      <Heading>Basic Text</Heading>
      <Paragraph>
        This is some basic text. It is styled to maximize readability.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed tristique nisl.
        Aliquam ut ligula interdum justo placerat commodo. In vitae ex a ipsum porttitor malesuada.
        Morbi facilisis, sem sollicitudin pharetra condimentum, est velit suscipit est, vitae
        malesuada lacus quam eu magna. Proin eu quam sed sem sodales iaculis id sed eros. Vivamus
        maximus, diam a placerat pulvinar, augue turpis semper urna, sed fermentum quam sem nec
        nulla. Nulla facilisi.
      </Paragraph>
    </div>
  ));
