import React, { Fragment } from 'react';
import { action } from '@storybook/addon-actions';
import { ReactTrixRTEInput, ReactTrixRTEToolbar } from '../index';

export default {
  title: 'React Trix Editor With Custom Toolbar',
  component: ReactTrixRTEToolbar,
};


export const WithCustomToolbar = () => (
  <Fragment>
    <ReactTrixRTEToolbar toolbarId="react-trix-rte-editor" />
    <ReactTrixRTEInput toolbarId="react-trix-rte-editor" />
  </Fragment>
);

export const WithToolbarActionNotGrouped = () => (
  <Fragment>
    <ReactTrixRTEToolbar toolbarId="react-trix-rte-editor" disableGroupingAction />
    <ReactTrixRTEInput toolbarId="react-trix-rte-editor" />
  </Fragment>
);

export const WithCustomizedToolbarActionWithoutGrouping = () => (
  <Fragment>
    <ReactTrixRTEToolbar
      disableGroupingAction
      toolbarId="react-trix-rte-editor"
      toolbarActions={["bold", "italic", "strike", "link", "heading1", "attachFiles", "undo", "redo"]}
    />
    <ReactTrixRTEInput toolbarId="react-trix-rte-editor" />
  </Fragment>
);

export const WithCustomizedToolbarActionWithGrouping = () => (
  <Fragment>
    <ReactTrixRTEToolbar
      toolbarId="react-trix-rte-editor"
      toolbarActions={["bold", "italic", "strike", "link", "heading1", "attachFiles", "undo", "redo"]}
    />
    <ReactTrixRTEInput toolbarId="react-trix-rte-editor" />
  </Fragment>
);

export const WithRailsDirectUpload = () => (
  <Fragment>
    <ReactTrixRTEToolbar toolbarId="react-trix-rte-editor" />
    <ReactTrixRTEInput toolbarId="react-trix-rte-editor" isRailsDirectUpload />
  </Fragment>
);

export const WithPlaceholder = () => (
  <Fragment>
    <ReactTrixRTEToolbar toolbarId="react-trix-rte-editor" />
    <ReactTrixRTEInput toolbarId="react-trix-rte-editor" placeholder="Enter your text." />
  </Fragment>
);

export const WithAutoFocus = () => (
  <Fragment>
    <ReactTrixRTEToolbar toolbarId="react-trix-rte-editor" />
    <ReactTrixRTEInput toolbarId="react-trix-rte-editor" autofocus />
  </Fragment>
);
