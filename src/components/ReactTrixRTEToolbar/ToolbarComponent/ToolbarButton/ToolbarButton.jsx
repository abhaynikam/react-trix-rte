import React from "react";
import PropTypes from 'prop-types';

import { TOOLBAR_LANGUAGE_OPTS } from "../../constants";

function ToolbarButton(props) {
  const { type, classNames, data, tabIndex, languageKey, elementProps } = props;

  let dataAttributeOptions = {};
  if(data) {
    const { trixAttribute, trixKey, trixAction } = data;
    if(trixAttribute) dataAttributeOptions["data-trix-attribute"] = trixAttribute;
    if(trixAction) dataAttributeOptions["data-trix-action"] = trixAction;
    if(trixAttribute) dataAttributeOptions["data-trix-key"] = trixKey;
  }

  return (
    <button
      type={type}
      {...dataAttributeOptions}
      tabIndex={tabIndex}
      className={classNames}
      title={TOOLBAR_LANGUAGE_OPTS[languageKey]}
      {...elementProps}
    >
      {TOOLBAR_LANGUAGE_OPTS[languageKey]}
    </button>
  )
}

ToolbarButton.defaultProps = {
  elementProps: {},
}

ToolbarButton.propTypes = {
  type: PropTypes.string.isRequired,
  classNames: PropTypes.string.isRequired,
  data: PropTypes.object,
  tabIndex: PropTypes.string,
  languageKey: PropTypes.string.isRequired,
  elementProps: PropTypes.object,
}

export default ToolbarButton;

