# [editron](https://github.com/sueddeutsche/editron) Script-Editor

[![Build Status](https://travis-ci.org/sueddeutsche/editron-script-editor.svg?branch=master)](https://travis-ci.org/sueddeutsche/editron-script-editor)

Add code editor for html and css.

`npm i editron-script-editor --save`


## Setup

### Add the bundled editor as a plugin

> Use bundled versions of this editor


Add the editor after the core-modules and it will register automatically (paths depend on your build-setup)

```html
<link rel="stylesheet" href="../node_modules/editron-script-editor/dist/editron-script-editor.css">

<!-- plugin editor -->
<script type="text/javascript" src="../node_modules/editron/dist/editron-modules.js"></script>
<script type="text/javascript" src="../node_modules/editron/dist/editron.js"></script>
<script type="text/javascript" src="../node_modules/editron-script-editor/dist/editron-script-editor.js"></script>
```


### Webpack build

> bundle the editor into your editron-application


#### Javascript

To use this editor within a webpack build, require the editor and add it to the editors list

```js
const editronScriptEditor = require("editron-script-editor");
const editors = [
    editronScriptEditor
    ...otherEditors
];
const editron = new Editron(schema, data, { editors });
```


#### Styles

Optionally import the custom script-editor styles via sass

```scss
@import "editron-script-editor/editron-script-editor.scss";
```

or simply add the bundled css-file (path is depending on your build-setup)

```html
<link rel="stylesheet" href="../node_modules/editron-script-editor/dist/editron-script-editor.css">
```


## Schema

The editor will be added for a matching schema like

```json
{
    "type": "string",
    "format": "css"
}
```

```json
{
    "type": "string",
    "format": "htmlmixed"
}
```

```json
{
    "type": "string",
    "format": "javascript"
}
```
