import React from "react";
import * as R from "ramda";
import PropTypes from 'prop-types';

import ToolbarButton from "./ToolbarComponent/ToolbarButton";
import ToolbarSpacer from "./ToolbarComponent/ToolbarSpacer";
import ToolbarLinkDialog from "./ToolbarComponent/ToolbarLinkDialog";
import ToolbarButtonGroup from "./ToolbarComponent/ToolbarButtonGroup";
import { groupBy, mapIndexed } from "../Shared/utils";
import { TOOLBAR_ACTION_OPTS, SPACER_BEFORE_TOOL_GROUP } from "./constants";

function ReactTrixRTEToolbar(props) {
  const { disableGroupingAction = false, toolbarId, toolbarActions, customToolbarActions } = props;
  const isToolbarActionPresent = toolbarActions && R.not(R.isEmpty(toolbarActions));
  let allowedToolbarActions = Object.assign(TOOLBAR_ACTION_OPTS, customToolbarActions);
  if(isToolbarActionPresent) {
    allowedToolbarActions = R.pick(toolbarActions, TOOLBAR_ACTION_OPTS);
  }

  function renderGroupedToolbarActions() {
    const groupedToolbarActionOptions = groupBy(allowedToolbarActions, "trixButtonGroup");
    let groupedToolbarActionHTML = [];

    R.mapObjIndexed((toolbarActionOptions, key) => {
      if(R.equals(key, SPACER_BEFORE_TOOL_GROUP)) {
        const dateTimestamp = new Date().getTime();
        groupedToolbarActionHTML.push(<ToolbarSpacer key={dateTimestamp}/>);
      }

      groupedToolbarActionHTML.push(
        <ToolbarButtonGroup
          key={key}
          toolbarActionOptions={toolbarActionOptions}
          groupName={key}
        />
      );
    })(groupedToolbarActionOptions);

    return groupedToolbarActionHTML;
  }

  function renderUnGroupedToolbarActions() {
    return mapIndexed((toolbarActionKey, index) => {
      return <ToolbarButton key={index} {...allowedToolbarActions[toolbarActionKey]} />
    })(R.keys(allowedToolbarActions));
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
