import React from 'react';
import { shallow } from 'enzyme';
import ClassicRTEToolbar from './ClassicRTEToolbar';
import ToolbarButtonGroup from "../Shared/ToolbarButtonGroup";
import ToolbarSpacer from "../Shared/ToolbarSpacer";

describe('ClassicRTEToolbar', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<ClassicRTEToolbar />);
    expect(wrapper).toHaveLength(1);
  });

  it('renders with toolbarId', () => {
    const wrapper = shallow(<ClassicRTEToolbar toolbarId="react-trix-rte-editor" />);
    expect(wrapper.find('.trix-button-row').props().id).toEqual("react-trix-rte-editor");
  });

  it('renders toolbar without grouping actions', () => {
    const wrapper = shallow(<ClassicRTEToolbar disableGroupingAction />);
    expect(wrapper.find('.trix-button-group')).toHaveLength(1);
  });

  it('renders toolbar with grouping actions', () => {
    const wrapper = shallow(<ClassicRTEToolbar />);
    expect(wrapper.find(ToolbarButtonGroup)).toHaveLength(4);
    expect(wrapper.find(ToolbarSpacer)).toHaveLength(1);
  });
});
