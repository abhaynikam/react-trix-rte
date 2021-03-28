import React from "react";
import PropTypes from 'prop-types';

import ToolbarButton from "./ToolbarComponent/ToolbarButton";
import ToolbarSpacer from "./ToolbarComponent/ToolbarSpacer";
import ToolbarLinkDialog from "./ToolbarComponent/ToolbarLinkDialog";
import ToolbarButtonGroup from "./ToolbarComponent/ToolbarButtonGroup";
import { groupBy } from "../Shared/utils";
import { TOOLBAR_ACTION_OPTS, SPACER_BEFORE_TOOL_GROUP } from "./constants";

function ReactTrixRTEToolbar(props) {
  const { disableGroupingAction = false, toolbarId, toolbarActions, customToolbarActions } = props;
  const isToolbarActionPresent = toolbarActions && toolbarActions.length !== 0;
  let allowedToolbarActions = Object.assign(TOOLBAR_ACTION_OPTS, customToolbarActions);
  if(isToolbarActionPresent) {
    allowedToolbarActions = toolbarActions.reduce((actions, toolbarAction) => {
      const actionOptions = TOOLBAR_ACTION_OPTS[toolbarAction]
      if (actionOptions) actions[toolbarAction] = actionOptions
      return actions
    }, {});
  }

  function renderGroupedToolbarActions() {
    const groupedToolbarActionOptions = groupBy(allowedToolbarActions, "trixButtonGroup");
    let groupedToolbarActionHTML = [];

    for (let groupName in groupedToolbarActionOptions) {
      const toolbarActionOptions = groupedToolbarActionOptions[groupName]
      if (groupName === SPACER_BEFORE_TOOL_GROUP) {
        const dateTimestamp = new Date().getTime();
        groupedToolbarActionHTML.push(<ToolbarSpacer key={dateTimestamp}/>);
      }

      groupedToolbarActionHTML.push(
        <ToolbarButtonGroup
          key={groupName}
          toolbarActionOptions={toolbarActionOptions}
          groupName={groupName}
        />
      );
    }

    return groupedToolbarActionHTML;
  }

  function renderUnGroupedToolbarActions() {
    const ungroupedToolbarActionsHTML = []
    for (let toolbarActionKey in allowedToolbarActions) {
      ungroupedToolbarActionsHTML.push(
        <ToolbarButton key={toolbarActionKey} {...allowedToolbarActions[toolbarActionKey]} />
      )
    }
    return ungroupedToolbarActionsHTML
  }

  function renderToolbarActions() {
    if(disableGroupingAction) {
      return(
        <span className="trix-button-group">
          {renderUnGroupedToolbarActions()}
        </span>
      );
    } else {
      return renderGroupedToolbarActions();
    }
  }

  function renderToolbarLinkDialog() {
    if (isToolbarActionPresent && toolbarActions.includes("link")) {
      return <ToolbarLinkDialog />;
    } else if(!isToolbarActionPresent) {
      return <ToolbarLinkDialog />;
    }
  }

  return (
    <trix-toolbar id={toolbarId}>
      <div className="trix-button-row">
        {renderToolbarActions()}
      </div>
      {renderToolbarLinkDialog()}
    </trix-toolbar>
  );
}

ReactTrixRTEToolbar.propTypes = {
  disableGroupingAction: PropTypes.bool,
  toolbarId: PropTypes.string,
  toolbarActions: PropTypes.array,
  customToolbarActions: PropTypes.object,
}

export default ReactTrixRTEToolbar;
