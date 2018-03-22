const m = require("mithril");
const Label = require("mithril-material-forms").label;
const isNodeContext = require("editron-core/utils/isNodeContext");
let CodeMirror = require("codemirror");

if (isNodeContext() !== true) { // eslint-disable-line no-negated-condition
    require("codemirror/lib/codemirror.css");
    require("codemirror/mode/css/css");
    require("codemirror/mode/htmlmixed/htmlmixed");
    require("codemirror/mode/javascript/javascript");
    require("codemirror/theme/base16-light.css");
} else {
    // @todo mock library in test only
    CodeMirror = {
        fromTextArea() {
            return {
                on: Function.prototype,
                setValue: Function.prototype,
                getValue: Function.prototype,
                toTextArea: Function.prototype
            };
        }
    };
}


module.exports = {

    initEditor($textarea, attrs) {
        this.editor = CodeMirror.fromTextArea($textarea, {
            mode: attrs.mode,
            theme: "base16-light",
            lineWrapping: true,
            lineNumbers: true
        });

        this.editor.on("blur", () => attrs.onchange(this.editor.getValue()));
    },

    onupdate(vnode) {
        this.editor.setValue(vnode.attrs.value);
    },

    destroyEditor() {
        this.editor.toTextArea();
    },

    view(vnode) {
        return m(".editron-script-editor.mmf-form",
            m(Label, vnode.attrs),
            m("textarea", {
                rows: 1,
                id: vnode.attrs.id,
                oncreate: (textareaNode) => this.initEditor(textareaNode.dom, vnode.attrs),
                onremove: (textareaNode) => this.destroyEditor(textareaNode.dom, vnode.attrs)
            }, vnode.attrs.value),
            m("ul", vnode.attrs.errors.map((error) =>
                m("li", error)
            )),
            m(".mmf-meta",
                vnode.attrs.description
            )
        );
    }
};
