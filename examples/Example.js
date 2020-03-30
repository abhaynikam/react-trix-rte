import React from 'react';

import { ReactTrixRTEInput, StandardRTEToolbar } from '../src/index';

class Example extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange(e, newValue) {
    console.log(newValue);
  }

  handleFocus(event) {
    console.log("On Focus..");
  }

  render() {
    return (
      <div>
        <StandardRTEToolbar toolbarId="rich-text-toolbar" />
        <ReactTrixRTEInput
          toolbarId="rich-text-toolbar"
          defaultValue="<p>Hello</p>"
          onChange={this.handleChange}
          onFocus={this.handleFocus}
        />
      </div>
    );
  }
}

export default Example;
