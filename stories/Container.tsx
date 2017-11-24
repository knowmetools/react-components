import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Container } from '../src/components';
import { Heading, Paragraph } from '../src/typography';


storiesOf('Container', module)
  .add('Default Container', () => (
    <Container>
      <Heading>Default Container</Heading>
      <Paragraph>
        Containers are designed to limit text width to maintain readability. If the viewport is
        wider than the container's width, the container will be horizontally centered.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed tristique nisl.
        Aliquam ut ligula interdum justo placerat commodo. In vitae ex a ipsum porttitor malesuada.
        Morbi facilisis, sem sollicitudin pharetra condimentum, est velit suscipit est, vitae
        malesuada lacus quam eu magna. Proin eu quam sed sem sodales iaculis id sed eros. Vivamus
        maximus, diam a placerat pulvinar, augue turpis semper urna, sed fermentum quam sem nec
        nulla. Nulla facilisi.
      </Paragraph>
    </Container>
  ))
  .add('Small Container', () => (
    <Container maxWidth="small">
      <Heading>Small Container</Heading>
      <Paragraph>
        For content that doesn't need to be as wide, the smaller container can be used. This works
        great for simple forms.
      </Paragraph>
    </Container>
   ));
