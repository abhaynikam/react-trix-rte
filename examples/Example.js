import Trix from 'trix';
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
    const customOption = {
      table: {
        type: "button",
        classNames: "trix-button trix-button--icon trix-button--icon-bold",
        languageKey: "table",
        tabIndex: "-1",
        trixButtonGroup: "text-tools",
        elementProps: {
          onClick: () => { alert("clicked") },
        },
        data: {
          trixAttribute: "table",
          trixKey: "ta",
        },
      }
    };

    return (
      <div>
        <ReactTrixRTEToolbar
          toolbarId="rich-text-toolbar"
          customToolbarActions={customOption}
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
