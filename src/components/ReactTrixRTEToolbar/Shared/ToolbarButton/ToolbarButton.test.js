import React from 'react';
import { shallow } from 'enzyme';
import ToolbarButton from './ToolbarButton';

describe('ToolbarButton', () => {
  it("renders the ToolbarButton without crashing", () => {
    const wrapper = shallow(
      <ToolbarButton
        type="button"
        classNames="toolbar-button-redo"
        tabIndex="-1"
        languageKey="redo"
      />
    );
    expect(wrapper).toHaveLength(1);
  });
});
