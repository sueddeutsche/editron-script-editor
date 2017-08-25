const ScriptEditor = require("../../scripteditor");
const testEditorIntegration = require("editron-core/test/support/testEditorIntegration");


testEditorIntegration(
    ScriptEditor,
    "#/scriptEditor",
    require("../support/schema.json"),
    require("../support/data.json")
);
