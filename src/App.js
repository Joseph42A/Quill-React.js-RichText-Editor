import React, { useState } from "react";
import Editor from "./Editor/Editor";

const App = () => {
  const [data, setData] = useState("");
  const [data2, setData2] = useState("");

  const handleSubmit = () => {
    console.log("Joseph data  : ", data);
    console.log("Joseph data2  : ", data2);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Description (Arabic)</h1>
          <Editor data={data} setData={setData} isArabic={true} />
          <h4>Output 01</h4>
          <div className="arabic">
            <div className="ql-editor ">
              <div dangerouslySetInnerHTML={{ __html: data }}></div>
            </div>{" "}
          </div>
        </div>
        <div>
          <h1>Description (English)</h1>
          <Editor
            data={data2}
            setData={setData2}
            isArabic={false}
            toolbarId={"t2"}
          />
          <h4>Output 02</h4>

          <div className="ql-editor">
            <div dangerouslySetInnerHTML={{ __html: data2 }}></div>
          </div>
        </div>

        <button className="btn-sub">Submit</button>
      </form>
    </div>
  );
};

export default App;
