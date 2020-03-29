import React from 'react';
import { shallow } from 'enzyme';
import ClassicRTEToolbar from './ClassicRTEToolbar';

describe('ClassicRTEToolbar', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<ClassicRTEToolbar />);
    expect(wrapper).toHaveLength(1);
  });

  it('renders with toolbarId', () => {
    const wrapper = shallow(<ClassicRTEToolbar toolbarId="react-trix-rte-editor" />);
    expect(wrapper.find('.trix-button-row').props().id).toEqual("react-trix-rte-editor");
  });
});
