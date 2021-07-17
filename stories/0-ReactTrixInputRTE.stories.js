import Trix from 'trix';
import React, { useRef } from 'react';
import { action } from '@storybook/addon-actions';
import { withCssResources } from '@storybook/addon-cssresources';
import { ReactTrixRTEInput } from '../index';

export default {
  title: 'React Trix Editor',
  component: ReactTrixRTEInput,
};

function ReactTrixInputRefComponent() {
  const reactTrixInputRef = useRef()
  const handleInitialize = (event) => {
    reactTrixInputRef.current.editor.insertHTML("<strong>Added using trixInputRef programmatically!</strong>");
  }

  return (
    <ReactTrixRTEInput
      trixInputRef={reactTrixInputRef}
      onInitialize={handleInitialize}
    />
  )
}

export const DefaultReactTrixEditor = () => (
  <ReactTrixRTEInput />
);

export const WithDefaultValue = () => (
  <ReactTrixRTEInput
    defaultValue='<h1>React Trix Rich Text Editor</h1><div>Trix is an open-source project from Basecamp, the creators of Ruby on Rails. Millions of people trust their text to Basecamp, and we built Trix to give them the best possible editing experience.</div><br /><div><strong>React Trix RTE wrapper to Trix Editor was created by: </strong><a href="https://www.abhaynikam.me/">Abhay Nikam</a></div>'
  />
);

export const WithTrixInputRef = () => (
  <ReactTrixInputRefComponent />
)

export const WithOnChangeHandler = () => (
  <ReactTrixRTEInput onChange={action('onChange')} />
);

export const WithOnBlur = () => (
  <ReactTrixRTEInput onBlur={action('onBlur')} />
);

export const WithOnFocus = () => (
  <ReactTrixRTEInput onFocus={action('onFocus')} />
);

export const WithBeforeInitialize = () => (
  <ReactTrixRTEInput onBeforeInitialize={action('onBeforeInitialize')} />
);

export const WithInitialize = () => (
  <ReactTrixRTEInput onInitialize={action('onInitialize')} />
);

export const WithSelectionChange = () => (
  <ReactTrixRTEInput onSelectionChange={action('onSelectionChange')} />
);

export const WithFileAccepted = () => (
  <ReactTrixRTEInput onFileAccepted={action('onFileAccepted')} />
);

export const WithAttachmentAdd = () => (
  <ReactTrixRTEInput onAttachmentAdd={action('onAttachmentAdd')} />
);

export const WithAttachmentRemove = () => (
  <ReactTrixRTEInput onAttachmentRemove={action('onAttachmentRemove')} />
);

export const WithIsRailsDirectUpload = () => (
  <ReactTrixRTEInput isRailsDirectUpload />
);

export const WithPlaceholder = () => (
  <ReactTrixRTEInput placeholder="Enter the description" />
);

export const WithAutoFocus = () => (
  <ReactTrixRTEInput autofocus />
);

export const WithCustomClassName = () => (
  <ReactTrixRTEInput className="tx-rte-with-border" defaultValue="<p>Too apply some styling via the className see the <strong>CSS Resources</strong> Tab of this story</p>" />
);

WithCustomClassName.parameters = {
  cssresources: [{
    id: "Blue Border",
    class: "tx-rte-with-border",
    code: `<style>.tx-rte-with-border { border: 2px solid blue; }</style>`,
    picked: false
  }]
}

WithCustomClassName.decorators = [withCssResources]
