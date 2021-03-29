import PropTypes from 'prop-types';
import React, { Fragment, useState, useRef, useEffect } from "react";

import { RAILS_DIRECT_UPLOADS_URL, RAILS_SERVICE_BLOB_URL } from "./constants";
import './ReactTrixRTEInput.style';

function ReactTrixRTEInput(props) {
  const {
    defaultValue = "",
    toolbarId,
    onBlur,
    onFocus,
    onChange,
    onInitialize,
    onFileAccepted,
    onAttachmentAdd,
    onAttachmentRemove,
    onSelectionChange,
    onBeforeInitialize,
    trixInputRef,
    isRailsDirectUpload = false,
    placeholder,
    autofocus,
  } = props;
  const trixRTEInputRef = trixInputRef ? trixInputRef : useRef();
  const [value, setValue] = useState(defaultValue);
  const uniqueDateTimestamp = new Date().getTime();
  const trixRTEInputId = props.id || `react-trix-rte-input-${uniqueDateTimestamp}`;
  const trixRTEInputName = props.name || "content";
  const directUploadOptions = isRailsDirectUpload ? {
    "data-direct-upload-url": RAILS_DIRECT_UPLOADS_URL,
    "data-blob-url-template": RAILS_SERVICE_BLOB_URL
  } : {};
  let trixEditorOptions = {}
  if(autofocus) trixEditorOptions["autofocus"] = true;

  useEffect(() => {
    if (trixRTEInputRef && trixRTEInputRef.current) {
      trixRTEInputRef.current.addEventListener("trix-change", handleChange);
      if(onFocus) trixRTEInputRef.current.addEventListener("trix-focus", onFocus);
      if(onBlur) trixRTEInputRef.current.addEventListener("trix-blur", onBlur);
      if(onInitialize) trixRTEInputRef.current.addEventListener("trix-initialize", onInitialize);
      if(onFileAccepted) trixRTEInputRef.current.addEventListener("trix-file-accept", onFileAccepted);
      if(onAttachmentAdd) trixRTEInputRef.current.addEventListener("trix-attachment-add", onAttachmentAdd);
      if(onAttachmentRemove) trixRTEInputRef.current.addEventListener("trix-attachment-remove", onAttachmentAdd);
      if(onSelectionChange) trixRTEInputRef.current.addEventListener("trix-selection-change", onSelectionChange);
      if(onBeforeInitialize) trixRTEInputRef.current.addEventListener("trix-before-initialize", onBeforeInitialize);
    }

    return () => {
      if (trixRTEInputRef && trixRTEInputRef.current) {
        trixRTEInputRef.current.removeEventListener("trix-change", handleChange);
        if(onFocus) trixRTEInputRef.current.removeEventListener("trix-focus", onFocus);
        if(onBlur) trixRTEInputRef.current.removeEventListener("trix-blur", onBlur);
        if(onInitialize) trixRTEInputRef.current.removeEventListener("trix-initialize", onInitialize);
        if(onFileAccepted) trixRTEInputRef.current.removeEventListener("trix-file-accept", onFileAccepted);
        if(onAttachmentAdd) trixRTEInputRef.current.removeEventListener("trix-attachment-add", onAttachmentAdd);
        if(onSelectionChange) trixRTEInputRef.current.removeEventListener("trix-selection-change", onSelectionChange);
        if(onAttachmentRemove) trixRTEInputRef.current.removeEventListener("trix-attachment-remove", onAttachmentAdd);
        if(onBeforeInitialize) trixRTEInputRef.current.removeEventListener("trix-before-initialize", onBeforeInitialize);
      }
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
        name={trixRTEInputName}
      />
      <trix-editor
        toolbar={toolbarId}
        placeholder={placeholder}
        ref={trixRTEInputRef}
        input={trixRTEInputId}
        {...directUploadOptions}
        {...trixEditorOptions}
      />
    </Fragment>
  );
}

ReactTrixRTEInput.propTypes = {
  id: PropTypes.string,
  toolbarId: PropTypes.string,
  defaultValue: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onFileAccepted: PropTypes.func,
  onAttachmentAdd: PropTypes.func,
  onAttachmentRemove: PropTypes.func,
  onSelectionChange: PropTypes.func,
  onInitialize: PropTypes.func,
  onBeforeInitialize: PropTypes.func,
  trixInputRef: PropTypes.func,
  isRailsDirectUpload: PropTypes.bool,
  placeholder: PropTypes.string,
  autofocus: PropTypes.bool,
};

export default ReactTrixRTEInput;
