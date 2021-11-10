# React Trix RTE

![NPM](https://img.shields.io/npm/l/react-trix-rte?style=flat-square)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/abhaynikam/react-trix-rte/Tests?style=flat-square)
![npm](https://img.shields.io/npm/dt/react-trix-rte?style=flat-square)

React Trix rich text editor is react wrapper built for the Trix editor created by [Basecamp](https://trix-editor.org/). We have built this library because we were rewriting the same component in multiple project.

This wrapper uses React hooks and adds readable event listeners on the Trix editor. The library also adds two toolbar components which has the ability to customize the toolbar actions as per our need.

### Demo

Please see the some live example on [ReactTrixRTE-Storybook](https://abhaynikam.github.io/react-trix-rte)

![ReactTrixRTE](https://d1sz9tkli0lfjq.cloudfront.net/items/242v2m2W362X110O2307/Screen%20Recording%202020-04-06%20at%2012.40%20AM.gif)


### Installation

To install the React Trix RTE, run the following command in the console.

```
npm install react-trix-rte
OR
yarn add react-trix-rte
```

### Usage

```javascript
import Trix from "trix";
import React, { useState } from "react";
import { ReactTrixRTEInput } from "react-trix-rte";

export default function TrixEditor(props) {
  const [value, setValue] = useState("");

  function handleChange(event, newValue) {
    setValue(newValue); // OR custom on change listener.
  }

  return (
    <ReactTrixRTEInput
      defaultValue="<div>React Trix Rich Text Editor</div>"
      onChange={handleChange}
    />
  )
}
```

### Upgrading to 1.0.7 or higher
React Trix RTE version `1.0.7` removes the dependency import for Trix because using Trix outside directly causes problems. Read issue: [17](https://github.com/abhaynikam/react-trix-rte/issues/17) and [19](https://github.com/abhaynikam/react-trix-rte/pull/19).

Import `import Trix from "trix";` to the component using React Trix RTE.

### ReactTrixInput API

`ReactTrixInput` is the Trix editor input which by default comes with the toolbar. The `ReactTrixInput` comes with following properties that could be accepted.

| Name                | Type | Description |
| ------------------- | ---- | ----------- |
| id                  | string   | The HTML id attribute for the input field
| name                | string   | The HTML name attribute for the input field
| toolbarId           | string   | If a custom toolbar is used for the Trix Input, pass the `toolbarId` of the custom toolbar to the input. |
| isRailsDirectUpload | boolean | React Trix editor support direct uploading of the files to the service if you are using Rails as a backend server. This defaults to `false` |
| railsDirectUploadUrl| string | Custom URL for Rails direct upload (`data-direct-upload-url`) |
| railsBlobUrl        | string | Custom URL for Rails blob template (`data-blob-url-template`) |
| placeholder         | string | Adds a placeholder to the React Trix Input |
| defaultValue        | string | The default value of the React Trix Input |
| autofocus           | boolean | Autofocus in the trix input. This is defaults to `false` |
| className           | string | Apply a custom css class to the editor |
| trixInputRef        | function | Adds a custom ref to the React Trix Input to programmatically edit text. Read the documentation for manual things you can perform on Trix editor [here](https://github.com/basecamp/trix#editing-text-programmatically) |
| onBeforeInitialize  | function | Fires when the `<trix-editor>` element is attached to the DOM just before Trix installs its editor object. |
| onInitialize        | function | Fires when the `<trix-editor>` element is attached to the DOM and its editor object is ready for use. |
| onChange            | function | Fires whenever the editor’s contents have changed. |
| onSelectionChange   | function | Fires any time the selected range changes in the editor. |
| onBlur              | function | Fire when the editor loses focus. |
| onFocus             | function | Fire when the editor gains focus. |
| onFileAccepted      | function | Fires when a file is dropped or inserted into the editor. You can access the DOM File object through the file property on the event. Call preventDefault on the event to prevent attaching the file to the document. |
| onAttachmentAdd     | function | Fires after an attachment is added to the document. You can access the Trix attachment object through the attachment property on the event. If the attachment object has a file property, you should store this file remotely and set the attachment’s URL attribute. See the attachment example for detailed information. |
| onAttachmentRemove  | function | Fires when an attachment is removed from the document. You can access the Trix attachment object through the attachment property on the event. You may wish to use this event to clean up remotely stored files. |

### ReactTrixRTEToolbar API

`ReactTrixRTEToolbar` is the custom Trix editor toolbar component. This component helps in customizing the toolbar options, classes and attributes in better way.

| Name                | Type | Description |
| ------------------- | ---- | ----------- |
| toolbarId             | string   | The ReactTrixInput initialize the default toolbar if the `toolbarId` is missing or not matching. Make sure the `toolbarId` matches. |
| disableGroupingAction | boolean  | Defaults to `false`. If the `disableGroupingAction` is enabled the toolbar actions are not grouped for a type. Example: text tools won't be grouped |
| toolbarActions        | array    | Allows customizing the list of toolbar actions. The available actions are `["bold", "italic", "strike", "link", "heading1", "quote", "code", "bullet", "number", "outdent", "indent", "attachFiles", "undo", "redo"]`.  |
| customToolbarActions  | object   | Override the toolbar actions properties or add custom toolbar actions. You can refer to default [toolbar actions options](https://github.com/abhaynikam/react-trix-rte/blob/master/src/components/ReactTrixRTEToolbar/constants.js) |

### Custom Toolbar Usage

```javascript
import React, { useState } from "react";
import Trix from "trix";
import { ReactTrixRTEInput, ReactTrixRTEToolbar } from "react-trix-rte";

export default function TrixEditor(props) {
  const [value, setValue] = useState("");

  function handleChange(event, newValue) {
    setValue(newValue); // OR custom on change listener.
  }

  return (
    <Fragment>
      <ReactTrixRTEToolbar toolbarId="react-trix-rte-editor" />
      <ReactTrixRTEInput
        toolbarId="react-trix-rte-editor"
        defaultValue="<div>React Trix Rich Text Editor</div>"
        onChange={handleChange}
      />
    </Fragment>
  )
}
```

### Contributing

Read more about [contributing](https://github.com/abhaynikam/react-trix-rte/blob/7704eb681801fe2eacd00a5da50cd0bfb8c0238d/CONTRIBUTING.md) to the ReactTrixRTE.

### Author
[Abhay Nikam](https://www.abhaynikam.me/pages/about)

### Contributor
[CUnknown](https://github.com/CUnknown)

### License
This project is licensed under the [MIT License](https://github.com/abhaynikam/react-trix-rte/blob/7704eb681801fe2eacd00a5da50cd0bfb8c0238d/LICENSE)
