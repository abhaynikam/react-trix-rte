import PropTypes from 'prop-types';
import React, { useState, useRef, useEffect } from "react";
import { getUniqInputId } from '../Shared/utils';

import { RAILS_DIRECT_UPLOADS_URL, RAILS_SERVICE_BLOB_URL } from "./constants";
import './ReactTrixRTEInput.style';

function ReactTrixRTEInput(props) {
  const {
    defaultValue,
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
    isRailsDirectUpload,
    placeholder,
    autofocus,
    className,
    railsDirectUploadUrl,
    railsBlobUrl
  } = props;
  const trixRTEInputRef = trixInputRef ? trixInputRef : useRef();
  const [value, setValue] = useState(defaultValue);
  const trixRTEInputId = props.id || getUniqInputId();
  const trixRTEInputName = props.name || "content";
  const directUploadOptions = isRailsDirectUpload ? {
    "data-direct-upload-url": railsDirectUploadUrl || RAILS_DIRECT_UPLOADS_URL,
    "data-blob-url-template": railsBlobUrl || RAILS_SERVICE_BLOB_URL
  } : {};
  let trixEditorOptions = {}
  if (autofocus) trixEditorOptions["autofocus"] = true;
  if (className) trixEditorOptions["class"] = className;

  useEffect(() => {
    if (trixRTEInputRef && trixRTEInputRef.current) {
      const { addEventListener } = trixRTEInputRef.current;
      addEventListener("trix-change", handleChange);
      if (onFocus) addEventListener("trix-focus", onFocus);
      if (onBlur) addEventListener("trix-blur", onBlur);
      if (onInitialize) addEventListener("trix-initialize", onInitialize);
      if (onFileAccepted) addEventListener("trix-file-accept", onFileAccepted);
      if (onAttachmentAdd) addEventListener("trix-attachment-add", onAttachmentAdd);
      if (onAttachmentRemove) addEventListener("trix-attachment-remove", onAttachmentRemove);
      if (onSelectionChange) addEventListener("trix-selection-change", onSelectionChange);
      if (onBeforeInitialize) addEventListener("trix-before-initialize", onBeforeInitialize);
    }

    return () => {
      if (trixRTEInputRef && trixRTEInputRef.current) {
        const { removeEventListener } = trixRTEInputRef.current;
        removeEventListener("trix-change", handleChange);
        if (onFocus) removeEventListener("trix-focus", onFocus);
        if (onBlur) removeEventListener("trix-blur", onBlur);
        if (onInitialize) removeEventListener("trix-initialize", onInitialize);
        if (onFileAccepted) removeEventListener("trix-file-accept", onFileAccepted);
        if (onAttachmentAdd) removeEventListener("trix-attachment-add", onAttachmentAdd);
        if (onSelectionChange) removeEventListener("trix-selection-change", onSelectionChange);
        if (onAttachmentRemove) removeEventListener("trix-attachment-remove", onAttachmentRemove);
        if (onBeforeInitialize) removeEventListener("trix-before-initialize", onBeforeInitialize);
      }
    };
  }, [])

  function handleChange(event) {
    const newValue = event.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(event, newValue);
    }
  }

  return (
    <>
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
    </>
  );
}

ReactTrixRTEInput.defaultProps = {
  isRailsDirectUpload: false,
  defaultValue: '',
};

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
  className: PropTypes.string,
  railsDirectUploadUrl: PropTypes.string,
  railsBlobUrl: PropTypes.string
};

export default ReactTrixRTEInput;
