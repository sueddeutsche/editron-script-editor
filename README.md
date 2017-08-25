# [editron](https://github.com/sueddeutsche/editron) Script-Editor

Add code editor for (currently) html and css.

`npm i editron-script-editor`


## Schema

Registers on schemas

```json
    {
        "type": "string",
        "format": "css"
    }
```

or 

```json
    {
        "type": "string",
        "format": "htmlmixed"
    }
```


## Plugin

Add it to your editors list, e.g.

```js
const editors = [
    require("editron-script-editor")
].concat(require("editron-core-editors"));
```

And optional import the custom script-editor styles via sass

```scss
@import "editron-script-editor/script-editor.scss";
```
