import React from "react";
import { shallow } from "enzyme";
import ToolbarLinkDialog from "./ToolbarLinkDialog";

describe("ToolbarLinkDialog", () => {
  it("renders the ToolbarLinkDialog without crashing", () => {
    const wrapper = shallow(<ToolbarLinkDialog />);
    expect(wrapper).toHaveLength(1);
  })
});
