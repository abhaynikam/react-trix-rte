import React from "react";
import { shallow } from "enzyme";
import ToolbarButtonGroup from "./ToolbarButtonGroup";

describe("ToolbarButtonGroup", () => {
  let defaultProps = {
    groupName: "text-tools",
    toolbarActionOptions: [{
      type: "button",
      classNames: "trix-button trix-button--icon trix-button--icon-bold",
      languageKey: "bold",
      tabIndex: "-1",
      trixButtonGroup: "text-tools",
    }]
  }

  it("renders the ToolbarButtonGroup without crashing", () => {
    const wrapper = shallow(<ToolbarButtonGroup {...defaultProps} />);
    expect(wrapper).toHaveLength(1);
  });
});
