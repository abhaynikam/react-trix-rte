import React from "react";
import { shallow } from "enzyme";
import ToolbarSpacer from "./ToolbarSpacer";

describe("ToolbarSpacer", () => {
  it("renders ToolbarSpacer without crashing", () => {
    const wrapper = shallow(<ToolbarSpacer />);
    expect(wrapper).toHaveLength(1);
  });
});
