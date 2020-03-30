import Trix from "trix";
import PropTypes from 'prop-types';
import React, { Fragment, useState, useRef, useEffect } from "react";

import './ReactTrixRTEInput.style';

function ReactTrixRTEInput(props) {
  const {
    defaultValue = "",
    toolbarId,
    onBlur,
    onFocus,
    onChange,
    onFileAccepted,
    onAttachmentAdd,
    onAttachmentRemove,
    onSelectionChange,
    onInitialize,
    onBeforeInitialize,
  } = props;
  const trixRTEInputRef = useRef();
  const [value, setValue] = useState(defaultValue);
  const uniqueDateTimestamp = new Date().getTime();
  const trixRTEInputId = `react-trix-rte-input-${uniqueDateTimestamp}`;

  useEffect(() => {
    trixRTEInputRef.current.addEventListener("trix-change", handleChange);
    if(onFocus) trixRTEInputRef.current.addEventListener("trix-focus", onFocus);
    if(onBlur) trixRTEInputRef.current.addEventListener("trix-blur", onBlur);
    if(onInitialize) trixRTEInputRef.current.addEventListener("trix-initialize", onInitialize);
    if(onFileAccepted) trixRTEInputRef.current.addEventListener("trix-file-accept", onFileAccepted);
    if(onAttachmentAdd) trixRTEInputRef.current.addEventListener("trix-attachment-add", onAttachmentAdd);
    if(onAttachmentRemove) trixRTEInputRef.current.addEventListener("trix-attachment-remove", onAttachmentAdd);
    if(onSelectionChange) trixRTEInputRef.current.addEventListener("trix-selection-change", onSelectionChange);
    if(onBeforeInitialize) trixRTEInputRef.current.addEventListener("trix-before-initialize", onBeforeInitialize);


    return () => {
      trixRTEInputRef.current.removeEventListener("trix-change", handleChange);
      if(onFocus) trixRTEInputRef.current.removeEventListener("trix-focus", onFocus);
      if(onBlur) trixRTEInputRef.current.removeEventListener("trix-blur", onBlur);
      if(onInitialize) trixRTEInputRef.current.removeEventListener("trix-initialize", onInitialize);
      if(onFileAccepted) trixRTEInputRef.current.removeEventListener("trix-file-accept", onFileAccepted);
      if(onAttachmentAdd) trixRTEInputRef.current.removeEventListener("trix-attachment-add", onAttachmentAdd);
      if(onSelectionChange) trixRTEInputRef.current.removeEventListener("trix-selection-change", onSelectionChange);
      if(onAttachmentRemove) trixRTEInputRef.current.removeEventListener("trix-attachment-remove", onAttachmentAdd);
      if(onBeforeInitialize) trixRTEInputRef.current.removeEventListener("trix-before-initialize", onBeforeInitialize);
    };
  }, [])

  function handleChange(event) {
    const newValue = event.target.value;
    setValue(newValue);
    if(onChange) {
      onChange(event, newValue);
    }
  }

  return (
    <Fragment>
      <input
        id={trixRTEInputId}
        value={value}
        type="hidden"
        name="content"
      />
      <trix-editor
        toolbar={toolbarId}
        ref={trixRTEInputRef}
        input={trixRTEInputId}
      />
    </Fragment>
  );
}

ReactTrixRTEInput.propTypes = {
  toolbarId: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onFileAccepted: PropTypes.func,
  onAttachmentAdd: PropTypes.func,
  onAttachmentRemove: PropTypes.func,
  onSelectionChange: PropTypes.func,
  onInitialize: PropTypes.func,
  onBeforeInitialize: PropTypes.func,
};

export default ReactTrixRTEInput;
