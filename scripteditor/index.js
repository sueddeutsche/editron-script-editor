const m = require("mithril");
const View = require("./View");
// const AbstractValueEditor = require("editron-core").editors.AbstractValueEditor;
const AbstractValueEditor = require("editron-core/editors/AbstractValueEditor");


const MODES = {
    htmlmixed: "htmlmixed",
    css: "css"
};

const SUPPORTED = Object.keys(MODES);

/**
 * Displays a value with a html-wyswig editor and adds an option to open the content in an html-script editor
 */
class ScriptEditor extends AbstractValueEditor {

    static editorOf(pointer, controller) {
        const schema = controller.schema().get(pointer);
        return schema.type === "string" && SUPPORTED.includes(schema.format);
    }

    constructor(pointer, controller, options) {
        const schema = controller.schema().get(pointer);

        options = Object.assign({
            // modify value type
            editorValueType: schema.format,
            viewModel: {
                mode: MODES[schema.format],
                // update data on blur of editor
                onchange: (value) => this.setValue(value)
            }
        }, options);

        super(pointer, controller, options);
        // this.render();
    }

    render() {
        m.render(this.$element, m(View, this.viewModel));
    }
}


module.exports = ScriptEditor;
