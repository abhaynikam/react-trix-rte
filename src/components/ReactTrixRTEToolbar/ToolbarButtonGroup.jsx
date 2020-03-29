import React from "react";

import ToolbarButton from "./Shared/ToolbarButton";
import { mapIndexed } from "../Shared/utils";
import { TOOLBAR_ACTION_GROUP_OPTS } from "./constants";

export default function ToolbarButtonGroup(props) {
  const { groupName, toolbarActionOptions } = props;

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
