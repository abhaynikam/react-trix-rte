# Change log

## master (unreleased)

* Enable custom URL for Rails direct upload with `railsDirectUploadUrl` and `railsBlobUrl` prop in `ReactTrixRTEInput`. Refer: [#43](/issues/43). ([@mech][])

## 1.0.14 (21-July-2021)
* Fixes onAttachmentRemove trix event listener. Fixes #36. ([@radhenazarkar][])
* Enable `className` prop in `ReactTrixRTEInput`. Refer: [#30](/issues/30). ([@alejo4373][])

## 1.0.13 (29-March-2021)
* Fixes issue when binding Trix events on the DOM element when React has not rendered the component yet and no DOM element reference is present. ([@CUnknown][])
* Fixes ReactTrixRTEToolbar component crashing when using `toolbarActions`. Refer: (#24). ([@alejo4373][])
* Removes Ramda dependency. ([@alejo4373][])

## 1.0.11 (11-March-2021)
* Fixes the ReactTrixRTEToolbar breaking because of missing dependency - ([@Axxxx0n][])

## 1.0.10 (11-February-2021)
* Bump React version to 1.17.1. ([@abhaynikam][])
* Bump Trix version to 1.13.1. ([@abhaynikam][])
* Update package.json to move React to peer dependencies. ([@abhaynikam][])

## 1.0.9 (18-January-2021)
* Adds `elementProps` option to add custom props to the ToolbarButton. ([@abhaynikam][])

## 1.0.8 (18-January-2021)
* Adds option to override or add custom toolbar actions. ([@abhaynikam][])

## 1.0.7 (02-December-2020)
* Remove 'unused' import of Trix to prevent webpack packaging conflicts with projects. ([@CUnknown][])
* Support ID and Name input attribute as component props. ([@CUnknown][])

## 1.0.6 (17-September-2020)

* Bump trix version `1.2.3` -> `1.2.4`. ([@abhaynikam][])

## 1.0.5 (29-July-2020)

* Add ability to allow Rails direct uploading via Trix Editor. ([@abhaynikam][])
* Add options to configure placeholder and autofocus for Trix Editor. ([@abhaynikam][])

## 1.0.4 (30-March-2020)

* Create React Trix RTE NPM package. ([@abhaynikam][])

[@abhaynikam]: https://github.com/abhaynikam
[@CUnknown]: https://github.com/CUnknown
[@Axxxx0n]: https://github.com/Axxxx0n
[@alejo4373]: https://github.com/alejo4373
[@radhenazarkar]: https://github.com/radhenazarkar
