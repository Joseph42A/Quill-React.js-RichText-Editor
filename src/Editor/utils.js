import React from "react";

const CustomUndo = () => (
  <svg viewBox="0 0 18 18">
    <polygon className="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10" />
    <path
      className="ql-stroke"
      d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"
    />
  </svg>
);

// Redo button icon component for Quill editor
const CustomRedo = () => (
  <svg viewBox="0 0 18 18">
    <polygon className="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10" />
    <path
      className="ql-stroke"
      d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"
    />
  </svg>
);

// Undo and redo functions for custom toolbar
function undoChange() {
  this.quill.history.undo();
}
function redoChange() {
  this.quill.history.redo();
}

const modules = (props) => ({
  toolbar: {
    container: "#" + props,
    handlers: {
      undo: undoChange,
      redo: redoChange,
    },
  },

  history: {
    delay: 500,
    maxStack: 100,
    userOnly: true,
  },
});

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "align",
  "strike",
  "script",
  "blockquote",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "color",
  "code-block",
];

const EditorToolbar = ({
  toolbarId,
  image = false,
  video = false,
  quote = false,
  indent = false,
  subScript = false,
  code = false,
}) => (
  <>
    {toolbarId !== undefined && (
      <div id={toolbarId}>
        <span className="ql-formats">
          <button className="ql-bold" />
          <button className="ql-italic" />
          <button className="ql-underline" />
          <button className="ql-strike" />
        </span>

        <span className="ql-formats">
          <select className="ql-size">
            <option value="extra-small">Extra Small</option>
            <option value="small">Small</option>
            <option value="medium" defaultValue>
              Medium
            </option>
            <option value="large">Large</option>
          </select>
          <select className="ql-header">
            <option value="1">Heading 1</option>
            <option value="2">Heading 2</option>
            <option value="3">Heading 3</option>
            <option value="4">Heading 4</option>
            <option value="5">Heading 5</option>
            <option value="6">Heading 6</option>
            <option value="" defaultValue>
              Normal
            </option>
          </select>
        </span>

        <span className="ql-formats">
          <button className="ql-list" value="ordered" />
          <button className="ql-list" value="bullet" />
          {indent && (
            <>
              <button className="ql-indent" value="-1" />
              <button className="ql-indent" value="+1" />
            </>
          )}
        </span>

        {(subScript || quote) && (
          <span className="ql-formats">
            {subScript && (
              <>
                <button className="ql-script" value="super" />
                <button className="ql-script" value="sub" />
              </>
            )}
            {quote && <button className="ql-blockquote" />}
          </span>
        )}

        <span className="ql-formats">
          <select className="ql-align" />
          <select className="ql-color" />
          <select className="ql-background" />
        </span>

        <span className="ql-formats">
          <button className="ql-link" />
          {image && <button className="ql-image" />}
          {video && <button className="ql-video" />}
        </span>

        {code && (
          <span className="ql-formats">
            {/* <button className="ql-formula" /> */}
            {/* <button className="ql-code-block" /> */}
            {/* <button className="ql-clean" /> */}
          </span>
        )}

        <span className="ql-formats">
          <button className="ql-undo">
            <CustomUndo />
          </button>
          <button className="ql-redo">
            <CustomRedo />
          </button>
        </span>
      </div>
    )}
  </>
);

const fontSizeLists = ["extra-small", "small", "medium", "large"];
const fontLists = [
  "arial",
  "comic-sans",
  "courier-new",
  "georgia",
  "helvetica",
  "Inter",
  "lucida",
];

export {
  CustomRedo,
  CustomUndo,
  undoChange,
  redoChange,
  modules,
  EditorToolbar,
  formats,
  fontSizeLists,
  fontLists,
};
