import React from "react";
import { TOOLBAR_LANGUAGE_OPTS } from "./constants";

export default function ToolbarButton(props) {
  const { type, classNames, data: { trixAttribute, trixKey }, tabIndex, languageKey } = props;

  let dataAttributeOptions = {};
  if(trixAttribute) dataAttributeOptions["data-trix-attribute"] = trixAttribute;
  if(trixAttribute) dataAttributeOptions["data-trix-key"] = trixKey;
  if(trixAttribute) dataAttributeOptions["data-trix-attribute"] = trixAttribute;

  return (
    <button
      type={type}
      tabIndex={tabIndex}
      className={classNames}
      title={TOOLBAR_LANGUAGE_OPTS[languageKey]}
      {...dataAttributeOptions}
    >
      {TOOLBAR_LANGUAGE_OPTS[languageKey]}
    </button>
  )
}
