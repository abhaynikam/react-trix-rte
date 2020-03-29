import * as R from "ramda";
import React from "react";

import ToolbarButtonGroup from "../ToolbarButtonGroup";
import ToolbarSpacer from "../ToolbarSpacer";
import { groupBy } from "../../Shared/utils";
import { TOOLBAR_ACTION_OPTS } from "../constants";

export default function ClassicRTEToolbar(props) {
  const { allowGroupingAction = true, toolbarId } = props;

  function renderGroupedToolbarActions() {
    const groupedToolbarActionOptions = groupBy(TOOLBAR_ACTION_OPTS, "trixButtonGroup");
    let groupedToolbarActionHTML = []

    R.mapObjIndexed((toolbarActionOptions, key) => {
      if(key == "history-tools") {
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

  function renderToolbarActions() {
    if(allowGroupingAction) {
      return renderGroupedToolbarActions();
    } else {
      return renderGroupedToolbarActions();
    }
  }

  return (
    <trix-toolbar>
      <div className="trix-button-row" id={toolbarId}>
        {renderToolbarActions()}
      </div>
    </trix-toolbar>
  );
}
