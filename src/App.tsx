import React, { useState } from "react";
import { Editor } from "./components/Editor";
import { Previewer } from "./components/Previewer";
import { initialText } from "./initialText";

function App() {
  const [code, setCode] = useState(initialText);
  const [hideEditor, setHideEditor] = useState(false);
  const [hidePreviewer, setHidePreviewer] = useState(false);

  return (
    <div className="d-md-flex">
      <Editor
        code={code}
        handleChange={(event) => {
          setCode(event.target.value);
        }}
        hideSelf={hideEditor}
        hideOther={hidePreviewer}
        handleHideOther={(event) => {
          event.preventDefault();
          setHidePreviewer(!hidePreviewer);
        }}
      />
      <Previewer
        code={code}
        hideSelf={hidePreviewer}
        hideOther={hideEditor}
        handleHideOther={(event) => {
          event.preventDefault();
          setHideEditor(!hideEditor);
        }}
      />
    </div>
  );
}

export default App;
