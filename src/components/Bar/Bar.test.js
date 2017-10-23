/* global expect, it, describe */

import React from 'react';
import { shallow } from 'enzyme';
import Bar from './Bar';

describe('Bar component', () => {
  it('should render successfully', () => {
    const component = shallow(<Bar percent={12} />);
    expect(component.exists()).toEqual(true);
  });
});
