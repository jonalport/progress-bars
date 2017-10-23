/* global expect, it, describe */

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

// Mock the API
const API = {
  getData: () => ({
    bars: [10, 20],
    buttons: [-1, 2, 3],
  }),
};

describe('App component', () => {
  it('should render successfully', () => {
    const component = shallow(<App API={API} />);

    expect(component.exists()).toEqual(true);
  });

  it('should save response data to local state', async () => {
    const component = shallow(<App API={API} />);
    await component.instance().componentWillMount();

    expect(component.state().bars[0]).toBe(10);
    expect(component.state().bars[1]).toBe(20);
  });
});
