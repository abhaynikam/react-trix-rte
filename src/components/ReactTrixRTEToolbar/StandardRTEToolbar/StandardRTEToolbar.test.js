import React from 'react';
import { shallow } from 'enzyme';
import StandardRTEToolbar from './StandardRTEToolbar';

describe('StandardRTEToolbar', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<StandardRTEToolbar />);
    expect(wrapper).toHaveLength(1);
  });
});
