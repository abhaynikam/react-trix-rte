import React from "react";

import ToolbarButton from "./ToolbarButton";
import { mapIndexed } from "../Shared/utils";
import { TOOLBAR_ACTION_GROUP_OPTS } from "./constants";

export default function ToolbarButtonGroup(props) {
  const { groupName, toolbarActionOptions } = props;
  console.log(toolbarActionOptions)

  function renderToolbarActions() {
    return mapIndexed((toolbarActionOption, index) => (
      <ToolbarButton
        key={index}
        {...toolbarActionOption}
      />
    ))(toolbarActionOptions);
  }

  return (
    <span className={TOOLBAR_ACTION_GROUP_OPTS[groupName]} data-trix-button-group={groupName}>
      {renderToolbarActions()}
    </span>
  )
}
