import Trix from "trix";
import React, { Fragment } from "react";

import './ReactTrixRTEInput.style';

export default function ReactTrixRTEInput(props) {
  const { toolbarId } = props;
  const uniqueDateTimestamp = new Date().getTime();
  const editorId = `react-trix-rte-input-${uniqueDateTimestamp}`;

  return (
    <Fragment>
      <input
        id={editorId}
        type="hidden"
        name="content"
      />
      <trix-editor
        input={editorId}
        toolbar={toolbarId}
      />
    </Fragment>
  );
}
