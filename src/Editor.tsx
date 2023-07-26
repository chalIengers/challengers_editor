/** @jsxImportSource @emotion/react */
import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Toolbar from "./components/Toolbar";
import Content from "./components/Content";
import editorType from "./components/@types/type";
import ReactDOMServer from "react-dom/server";

export default function Editor({
  contentBorderColor,
  contentBorderFocusColor,
  defaultFontColor,
  defaultFontSize,
  defaultWidth,
}: editorType) {
  const editorRef = useRef(null);
  // const componentAsHTMLString = ReactDOMServer.renderToStaticMarkup(<Content />);
  //   const iframeContent = `
  //   <!DOCTYPE html>
  //   <html>
  //     <head>
  //       <title>React Component in iframe</title>
  //     </head>
  //     <body>
  //       ${componentAsHTMLString}
  //     </body>
  //   </html>
  // `;

  return (
    <div
      css={css`
        width: ${defaultWidth ? defaultWidth : "100%"};
        min-width: 610px;
      `}
    >
      <Toolbar editorRef={editorRef} />
      <Content
        contentBorderColor={contentBorderColor}
        contentBorderFocusColor={contentBorderFocusColor}
        defaultFontColor={defaultFontColor}
        defaultFontSize={defaultFontSize}
        ref={editorRef}
      />
      {/* <iframe title="React Component" srcDoc={iframeContent} /> */}
    </div>
  );
}
