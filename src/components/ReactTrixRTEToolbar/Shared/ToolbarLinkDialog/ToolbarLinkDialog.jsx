import React from "react";
import { TOOLBAR_LANGUAGE_OPTS } from "../../constants";

export default function ToolbarLinkDialog() {
  return (
    <div
      data-trix-dialogs
      className="trix-dialogs"
    >
      <div
        className="trix-dialog trix-dialog--link"
        data-trix-dialog="href"
        data-trix-dialog-attribute="href"
      >
        <div className="trix-dialog__link-fields">
          <input
            type="url"
            name="href"
            className="trix-input trix-input--dialog"
            placeholder={TOOLBAR_LANGUAGE_OPTS["urlPlaceholder"]}
            aria-label={TOOLBAR_LANGUAGE_OPTS["url"]}
            required
            data-trix-input
          />
          <div className="trix-button-group">
            <input
              type="button"
              className="trix-button trix-button--dialog"
              value={TOOLBAR_LANGUAGE_OPTS["link"]}
              data-trix-method="setAttribute"
            />
            <input
              type="button"
              className="trix-button trix-button--dialog"
              value={TOOLBAR_LANGUAGE_OPTS["unlink"]}
              data-trix-method="removeAttribute"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
