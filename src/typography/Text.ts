import * as React from 'react';
import styled, { StyledComponentClass } from 'styled-components';

import { ITheme } from '../theme';


export interface ITextProps {
  theme?: ITheme;
}


/**
 * A basic text component. This is the building block for all other text in the library.
 */
const Text = styled.span`
  color: ${(props: ITextProps) => props.theme.colors.body };
  font-family: ${(props: ITextProps) => props.theme.fonts.base };
  line-height: ${(props: ITextProps) => props.theme.lineHeight };
`;


/**
 * Text in a 'p' tag. This is simply exported for convienience.
 */
const Paragraph = Text.withComponent('p');


export default Text;
export { Paragraph };
