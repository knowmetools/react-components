import * as React from 'react';
import { StyledComponentClass } from 'styled-components';

import Text, { ITextProps } from './Text';


export interface IHeadingProps extends ITextProps {}


/**
 * A basic header component. This is built off of the basic text component.
 */
const Heading = Text.withComponent('h1').extend`
  color: ${(props: IHeadingProps) => props.theme.colors.brand };
  font-family: ${(props: IHeadingProps) => props.theme.fonts.headings };
`;


export default Heading;
