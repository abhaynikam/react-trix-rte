import React from 'react';

import { ReactTrixRTEInput, ClassicRTEToolbar } from '../src/index';

class Example extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ClassicRTEToolbar toolbarId="rich-text-toolbar" />
        <ReactTrixRTEInput toolbarId="rich-text-toolbar" />
      </div>
    );
  }
}

export default Example;
