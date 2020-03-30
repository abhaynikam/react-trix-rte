import Trix from "trix";
import PropTypes from 'prop-types';
import React, { Fragment, useState, useRef, useEffect } from "react";

import './ReactTrixRTEInput.style';

function ReactTrixRTEInput(props) {
  const {
    defaultValue = "",
    onChange,
    toolbarId,
  } = props;
  const [value, setValue] = useState(defaultValue);
  const uniqueDateTimestamp = new Date().getTime();
  const trixRTEInputId = `react-trix-rte-input-${uniqueDateTimestamp}`;
  const trixRTEInputRef = useRef();

  useEffect(() => {
    trixRTEInputRef.current.addEventListener("trix-change", handleChange);

    return () => {
      trixRTEInputRef.current.removeEventListener("trix-change", handleChange);
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
  onChange: PropTypes.func
};

export default ReactTrixRTEInput;
