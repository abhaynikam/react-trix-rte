import React from "react";
import PropTypes from "prop-types";

import ToolbarButton from "../ToolbarButton";
import { mapIndexed } from "../../../Shared/utils";
import { TOOLBAR_ACTION_GROUP_OPTS } from "../../constants";

function ToolbarButtonGroup(props) {
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

ToolbarButtonGroup.propTypes = {
  groupName: PropTypes.string.isRequired,
  toolbarActionOptions: PropTypes.array.isRequired
}

export default ToolbarButtonGroup;
