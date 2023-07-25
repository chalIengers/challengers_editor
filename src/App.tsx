import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Editor from "./Editor";

function App() {
  return (
    <div className="App">
      <Editor
        contentBorderColor={"#333333"}
        contentBorderFocusColor=""
        defaultFontSize="14px"
        defaultFontColor=""
        defaultWidth="10rem"
      />
    </div>
  );
}

export default App;
