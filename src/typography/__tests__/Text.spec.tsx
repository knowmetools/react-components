import { shallow } from 'enzyme';
import * as React from 'react';

import { default as defaultTheme, ITheme } from '../../theme';

import { Text } from '../';


const setup = ({ theme = defaultTheme } = {}) => {
  const props = {
    theme,
  };
  const wrapper = shallow(<Text {...props} />);

  return {
    props,
    wrapper,
  };
};


describe('Text Component', () => {
  it('should pull some styles from the theme', () => {
    const { props, wrapper } = setup();
    const { theme } = props;

    expect(wrapper).toHaveStyleRule('color', theme.colors.body);
    expect(wrapper).toHaveStyleRule('font-family', theme.fonts.base.replace(', ', ','));
    expect(wrapper).toHaveStyleRule('line-height', theme.lineHeight.toString());
  });
});
