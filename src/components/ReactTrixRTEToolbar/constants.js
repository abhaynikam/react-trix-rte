export const TOOLBAR_ACTION_OPTS = {
  bold: {
    type: "button",
    classNames: "trix-button trix-button--icon trix-button--icon-bold",
    languageKey: "bold",
    tabIndex: "-1",
    trixButtonGroup: "text-tools",
    data: {
      trixAttribute: "bold",
      trixKey: "b",
    },
  },
  italic: {
    type: "button",
    classNames: "trix-button trix-button--icon trix-button--icon-italic",
    languageKey: "italic",
    tabIndex: "-1",
    trixButtonGroup: "text-tools",
    data: {
      trixAttribute: "italic",
      trixKey: "i",
    },
  },
  strike: {
    type: "button",
    classNames: "trix-button trix-button--icon trix-button--icon-strike",
    languageKey: "strike",
    tabIndex: "-1",
    trixButtonGroup: "text-tools",
    data: {
      trixAttribute: "strike"
    },
  },
  link: {
    type: "button",
    classNames: "trix-button trix-button--icon trix-button--icon-link",
    languageKey: "link",
    tabIndex: "-1",
    trixButtonGroup: "text-tools",
    data: {
      trixAttribute: "href",
      trixKey: "k",
      trixAction: "link"
    },
  },
  heading1: {
    type: "button",
    classNames: "trix-button trix-button--icon trix-button--icon-heading-1",
    languageKey: "heading1",
    tabIndex: "-1",
    trixButtonGroup: "block-tools",
    data: {
      trixAttribute: "heading1"
    },
  },
  quote: {
    type: "button",
    classNames: "trix-button trix-button--icon trix-button--icon-quote",
    languageKey: "quote",
    tabIndex: "-1",
    trixButtonGroup: "block-tools",
    data: {
      trixAttribute: "quote"
    },
  },
  code: {
    type: "button",
    classNames: "trix-button trix-button--icon trix-button--icon-code",
    languageKey: "code",
    tabIndex: "-1",
    trixButtonGroup: "block-tools",
    data: {
      trixAttribute: "code"
    },
  },
  bullet: {
    type: "button",
    classNames: "trix-button trix-button--icon trix-button--icon-bullet-list",
    languageKey: "bullets",
    tabIndex: "-1",
    trixButtonGroup: "block-tools",
    data: {
      trixAttribute: "bullet"
    },
  },
  number: {
    type: "button",
    classNames: "trix-button trix-button--icon trix-button--icon-number-list",
    languageKey: "numbers",
    tabIndex: "-1",
    trixButtonGroup: "block-tools",
    data: {
      trixAttribute: "number"
    },
  },
  outdent: {
    type: "button",
    classNames: "trix-button trix-button--icon trix-button--icon-decrease-nesting-level",
    languageKey: "outdent",
    tabIndex: "-1",
    trixButtonGroup: "block-tools",
    data: {
      trixAction: "decreaseNestingLevel"
    },
  },
  indent: {
    type: "button",
    classNames: "trix-button trix-button--icon trix-button--icon-increase-nesting-level",
    languageKey: "indent",
    tabIndex: "-1",
    trixButtonGroup: "block-tools",
    data: {
      trixAction: "increaseNestingLevel"
    },
  },
  attachFiles: {
    type: "button",
    classNames: "trix-button trix-button--icon trix-button--icon-attach",
    languageKey: "attachFiles",
    tabIndex: "-1",
    trixButtonGroup: "file-tools",
    data: {
      trixAction: "attachFiles"
    },
  },
  undo: {
    type: "button",
    classNames: "trix-button trix-button--icon trix-button--icon-undo",
    languageKey: "undo",
    tabIndex: "-1",
    trixButtonGroup: "history-tools",
    data: {
      trixAction: "undo",
      trixKey: "z",
    },
  },
  redo: {
    type: "button",
    classNames: "trix-button trix-button--icon trix-button--icon-redo",
    languageKey: "redo",
    tabIndex: "-1",
    trixButtonGroup: "history-tools",
    data: {
      trixAction: "redo",
      trixKey: "shift+z",
    },
  },
};

export const TOOLBAR_LANGUAGE_OPTS = {
  attachFiles: "Attach Files",
  bold: "Bold",
  bullets: "Bullets",
  byte:  "Byte",
  bytes: "Bytes",
  captionPlaceholder: "Add a caption…",
  code: "Code",
  heading1: "Heading",
  indent: "Increase Level",
  italic: "Italic",
  link: "Link",
  numbers: "Numbers",
  outdent: "Decrease Level",
  quote: "Quote",
  redo: "Redo",
  remove: "Remove",
  strike: "Strikethrough",
  undo: "Undo",
  unlink: "Unlink",
  url: "URL",
  urlPlaceholder: "Enter a URL…",
  GB: "GB",
  KB: "KB",
  MB: "MB",
  PB: "PB",
  TB: "TB",
};

export const TOOLBAR_ACTION_GROUP_OPTS = {
  "text-tools": "trix-button-group trix-button-group--text-tools",
  "block-tools": "trix-button-group trix-button-group--block-tools",
  "file-tools": "trix-button-group trix-button-group--file-tools",
  "history-tools": "trix-button-group trix-button-group--history-tools"
};

export const SPACER_BEFORE_TOOL_GROUP = "history-tools";
