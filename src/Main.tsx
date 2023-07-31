import React, { useEffect, useRef } from "react";
import Editor from "./lib/Editor/Editor";

function Main() {
  const getObject = useRef(null);

  return (
    <div className="App">
      <Editor />
      <button type="button" onClick={() => console.log(getObject.current)}>
        현재 에디터 값 불러오기
      </button>
    </div>
  );
}

export default Main;
