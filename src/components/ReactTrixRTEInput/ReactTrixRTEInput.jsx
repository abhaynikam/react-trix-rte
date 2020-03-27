import Trix from "trix";
import React from "react";

import './ReactTrixRTEInput.style';

export default function ReactTrixRTEInput() {
  const uniqueDateTimestamp = new Date().getTime();
  const editorId = `react-trix-rte-input-${uniqueDateTimestamp}`;

  return (
    <div className="react-trix-rte-input-container">
      <input
        id={editorId}
        type="hidden"
        name="content"
      />
      <trix-editor input={editorId} />
    </div>
  );
}
