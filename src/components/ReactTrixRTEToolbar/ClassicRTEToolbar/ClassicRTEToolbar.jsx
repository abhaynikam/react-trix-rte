import React from "react";
import * as R from "ramda";
import PropTypes from 'prop-types';

import ToolbarButton from "../Shared/ToolbarButton";
import ToolbarSpacer from "../Shared/ToolbarSpacer";
import ToolbarLinkDialog from "../Shared/ToolbarLinkDialog";
import ToolbarButtonGroup from "../Shared/ToolbarButtonGroup";
import { groupBy, mapIndexed } from "../../Shared/utils";
import { TOOLBAR_ACTION_OPTS } from "../constants";
import { SPACER_BEFORE_TOOL_GROUP } from "./constants";

function ClassicRTEToolbar(props) {
  const { disableGroupingAction = false, toolbarId } = props;

  function renderGroupedToolbarActions() {
    const groupedToolbarActionOptions = groupBy(TOOLBAR_ACTION_OPTS, "trixButtonGroup");
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
      return <ToolbarButton key={index} {...TOOLBAR_ACTION_OPTS[toolbarActionKey]} />
    })(R.keys(TOOLBAR_ACTION_OPTS));
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

  return (
    <trix-toolbar id={toolbarId}>
      <div className="trix-button-row">
        {renderToolbarActions()}
      </div>
      <ToolbarLinkDialog />
    </trix-toolbar>
  );
}

ClassicRTEToolbar.propTypes = {
  disableGroupingAction: PropTypes.bool,
  toolbarId: PropTypes.string
}

export default ClassicRTEToolbar;
