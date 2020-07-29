import React from 'react';
import { shallow } from 'enzyme';
import ReactTrixRTEInput from './ReactTrixRTEInput';
import { RAILS_DIRECT_UPLOADS_URL, RAILS_SERVICE_BLOB_URL } from "./constants";

describe('ReactTrixRTEInput', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<ReactTrixRTEInput />);
    expect(wrapper).toHaveLength(1);
  });

  it('renders with toolbarId', () => {
    const wrapper = shallow(<ReactTrixRTEInput toolbarId="react-trix-rte-editor" />);
    expect(wrapper.find('trix-editor').props().toolbar).toEqual("react-trix-rte-editor");
  });

  it('renders with default value', () => {
    const wrapper = shallow(<ReactTrixRTEInput defaultValue="<p>React Trix RTE</p>" />);
    expect(wrapper.find('input').props().value).toEqual("<p>React Trix RTE</p>");
  });

  it('renders with rails direct upload URL', () => {
    const wrapper = shallow(<ReactTrixRTEInput isRailsDirectUpload />);
    expect(wrapper.find('trix-editor').props()['data-direct-upload-url']).toEqual(RAILS_DIRECT_UPLOADS_URL);
    expect(wrapper.find('trix-editor').props()['data-blob-url-template']).toEqual(RAILS_SERVICE_BLOB_URL);
  });
});
