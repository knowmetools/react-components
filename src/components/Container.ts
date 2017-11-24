import * as React from 'react';
import styled, { StyledComponentClass, StyledFunction } from 'styled-components';

import { default as defaultTheme, ITheme } from '../theme';


export type ContainerSize = 'small' | 'normal';


export interface IContainerProps {
  theme?: ITheme;
  maxWidth?: ContainerSize;
}


const div: StyledFunction<IContainerProps & React.HTMLProps<HTMLDivElement>> = styled.div;


/**
 * A centered container to hold content. By default, it limits itself to a width that makes multi-
 * line text readable. If the viewport is wider than the container's width, it will center itself.
 */
const Container = div`
  margin: 0 auto;
  max-width: ${({ maxWidth }) => (maxWidth === 'small' ? '21rem' : '51rem')};
  padding: 0 .5rem;
`;

Container.defaultProps = {
  maxWidth: 'normal',
  theme: defaultTheme,
};


export default Container;
