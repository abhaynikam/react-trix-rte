import React from 'react';

import { ReactTrixRTEInput, ReactTrixRTEToolbar } from '../src/index';

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
        <ReactTrixRTEToolbar
          toolbarId="rich-text-toolbar"
          toolbarActions={["bold", "italic"]}
        />
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
