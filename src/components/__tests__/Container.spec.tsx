import { shallow } from 'enzyme';
import * as React from 'react';

import Container from '../Container';


const setup = ({ ...rest } = {}) => {
  const props = { ...rest };
  const wrapper = shallow(<Container {...props} />);

  return {
    props,
    wrapper,
  };
};


describe('Container Component', () => {
  it('should have a max-width and be centered', () => {
    const { wrapper } = setup();

    expect(wrapper).toHaveStyleRule('margin', '0 auto');
    expect(wrapper).toHaveStyleRule('max-width', '51rem');
    expect(wrapper).toHaveStyleRule('padding', '0 .5rem');
  });

  it('should have a smaller max-width if the "maxWidth" prop is "small"', () => {
    const { wrapper } = setup({ maxWidth: 'small' });

    expect(wrapper).toHaveStyleRule('max-width', '21rem');
  });
});
