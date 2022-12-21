import React from "react";
import ReactQuill from "react-quill";
import { Quill } from "react-quill";
import { EditorToolbar, fontLists, fontSizeLists, modules } from "./utils";
import "react-quill/dist/quill.snow.css";
import "./styles.css";

const Size = Quill.import("formats/size");
const Font = Quill.import("formats/font");
Size.whitelist = fontSizeLists;
Font.whitelist = fontLists;

Quill.register(Size, true);
Quill.register(Font, true);

const Editor = ({ data, setData, isArabic = false, toolbarId = "t1" }) => {
  return (
    <div>
      <div className={isArabic ? "arabic" : ""}>
        <EditorToolbar toolbarId={toolbarId} />
        <ReactQuill
          theme="snow"
          value={data}
          onChange={(value) => setData(value)}
          placeholder="Write something"
          modules={modules(toolbarId)}
        />
      </div>
    </div>
  );
};

export default Editor;
