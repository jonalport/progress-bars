/* global expect, it, describe */

import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button component', () => {
  it('should render successfully', () => {
    const component = shallow(<Button barValue={12} value={-5} clickHandler={jest.fn()} />);
    expect(component.exists()).toEqual(true);
  });

  it('should show text supplied by prop', () => {
    const component = shallow(<Button barValue={12} value={-5} clickHandler={jest.fn()} />);
    const button = component.find('button');
    expect(button.text()).toEqual('-5');
  });

  it('should call the click handler upon click event', () => {
    const handler = jest.fn();
    const component = shallow(<Button barValue={12} value={-5} clickHandler={handler} />);
    const button = component.find('button');
    button.simulate('click');
    expect(handler).toBeCalled();
  });
});
