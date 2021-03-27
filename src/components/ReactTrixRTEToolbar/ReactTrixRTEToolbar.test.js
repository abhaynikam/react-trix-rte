import React from 'react';
import { shallow } from 'enzyme';
import ReactTrixRTEToolbar from './ReactTrixRTEToolbar';
import ToolbarButtonGroup from "./ToolbarComponent/ToolbarButtonGroup";
import ToolbarSpacer from "./ToolbarComponent/ToolbarSpacer";

describe('ReactTrixRTEToolbar', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<ReactTrixRTEToolbar />);
    expect(wrapper).toHaveLength(1);
  });

  it('renders with toolbarId', () => {
    const wrapper = shallow(<ReactTrixRTEToolbar toolbarId="react-trix-rte-editor" />);
    expect(wrapper.find('trix-toolbar').props().id).toEqual("react-trix-rte-editor");
  });

  it('renders toolbar with specified toolbarActions', () => {
    let toolbarActions = ["bold", "indent", "undo"]
    const wrapper = shallow(<ReactTrixRTEToolbar toolbarActions={toolbarActions} />);
    expect(wrapper.find(ToolbarButtonGroup)).toHaveLength(3);
  });

  it('renders toolbar without grouping actions', () => {
    const wrapper = shallow(<ReactTrixRTEToolbar disableGroupingAction />);
    expect(wrapper.find('.trix-button-group')).toHaveLength(1);
  });

  it('renders toolbar with grouping actions', () => {
    const wrapper = shallow(<ReactTrixRTEToolbar />);
    expect(wrapper.find(ToolbarButtonGroup)).toHaveLength(4);
    expect(wrapper.find(ToolbarSpacer)).toHaveLength(1);
  });
});
