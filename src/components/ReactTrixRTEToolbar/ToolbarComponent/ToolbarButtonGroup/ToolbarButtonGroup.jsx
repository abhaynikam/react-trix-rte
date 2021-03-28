import React from "react";
import PropTypes from "prop-types";
import ToolbarButton from "../ToolbarButton";
import { TOOLBAR_ACTION_GROUP_OPTS } from "../../constants";

function ToolbarButtonGroup(props) {
  const { groupName, toolbarActionOptions } = props;

  function renderToolbarActions() {
    const toolbarButtonsHTML = []
    toolbarActionOptions.forEach((toolbarActionOption, index) =>  {
       toolbarButtonsHTML.push(<ToolbarButton key={index} {...toolbarActionOption} />)
    })

    return toolbarButtonsHTML
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
