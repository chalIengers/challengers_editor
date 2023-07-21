import React from "react";
import Toolbar from "./components/Toolbar";
import Content from "./components/Content";
import editorType from "./components/@types/type";

export default function Editor({
  contentBorderColor,
  contentBorderFocusColor,
  defaultFontColor,
  defaultFontSize,
}: editorType) {
  return (
    <div>
      <Toolbar />
      <Content
        contentBorderColor={contentBorderColor}
        contentBorderFocusColor={contentBorderFocusColor}
        defaultFontColor={defaultFontColor}
        defaultFontSize={defaultFontSize}
      />
    </div>
  );
}
