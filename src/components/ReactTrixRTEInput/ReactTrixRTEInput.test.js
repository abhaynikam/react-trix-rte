import React from 'react';
import { shallow } from 'enzyme';
import ReactTrixRTEInput from './ReactTrixRTEInput';

describe('ReactTrixRTEInput', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<ReactTrixRTEInput />);
    expect(wrapper).toHaveLength(1);
  });

  it('renders with toolbarId', () => {
    const wrapper = shallow(<ReactTrixRTEInput toolbarId="react-trix-rte-editor" />);
    expect(wrapper.find('trix-editor').props().toolbar).toEqual("react-trix-rte-editor");
  });
});
