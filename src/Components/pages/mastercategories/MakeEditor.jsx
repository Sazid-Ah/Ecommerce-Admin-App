import React from "react";
const Ckeditor = require("@ckeditor/ckeditor5-build-classic/build/ckeditor.js");

function MakeEditor() {
  let ckeditorRef = React.useCallback((node) => {
    if (node) {
      Ckeditor.create(node);
    }
  }, []);

  return (
    <>
      <h5>Description (EN)</h5>
      <div ref={ckeditorRef}></div>
    </>
  );
}

export default MakeEditor;
