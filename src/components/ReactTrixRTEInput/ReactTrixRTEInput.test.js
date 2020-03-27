import React from 'react';
import { shallow } from 'enzyme';
import ReactTrixRTEInput from './ReactTrixRTEInput';

describe('ReactTrixRTEInput', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<ReactTrixRTEInput />);
    expect(wrapper).toHaveLength(1);
  });
});
