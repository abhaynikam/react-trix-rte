import React from "react";
import * as R from "ramda";
import PropTypes from 'prop-types';

import ToolbarSpacer from "../Shared/ToolbarSpacer";
import ToolbarButtonGroup from "../Shared/ToolbarButtonGroup";
import { groupBy } from "../../Shared/utils";
import { TOOLBAR_ACTION_OPTS } from "../constants";
import { SPACER_BEFORE_TOOL_GROUP } from "./constants";

function ClassicRTEToolbar(props) {
  const { allowGroupingAction = true, toolbarId } = props;

  function renderGroupedToolbarActions() {
    const groupedToolbarActionOptions = groupBy(TOOLBAR_ACTION_OPTS, "trixButtonGroup");
    let groupedToolbarActionHTML = []

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

ClassicRTEToolbar.propTypes = {
  allowGroupingAction: PropTypes.bool,
  toolbarId: PropTypes.string
}

export default ClassicRTEToolbar;
