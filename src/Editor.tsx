/** @jsxImportSource @emotion/react */
import React, { useRef, useState } from "react";
import { css } from "@emotion/react";
import Toolbar from "./components/Toolbar";
import editorType from "./components/@types/type";
import GlobalFonts from "./styles/GlobalFonts";
import "./index.css";

export function Editor({
  defaultFontSize,
  defaultWidth,
  editorID,
  environmentColor,
  placeholder = "텍스트를 입력해주세요",
}: editorType) {
  const editorRef = useRef(null);
  const [editorDoc, setEditorDoc] = useState<HTMLElement | undefined | null>(
    undefined
  );
  const randomID = new Date().getMilliseconds();

  if (editorID) {
    window.editorID = editorID;
  } else {
    window.editorID = `likelion${randomID}`;
  }

  const onLoadIfr = () => {
    if (editorRef?.current) {
      const iframeRef = (editorRef.current as HTMLIFrameElement).contentWindow;
      const editorDoc = iframeRef?.document;
      const editorElement = editorDoc?.getElementById("editor");
      setEditorDoc(editorElement);

      if (!placeholder) {
        placeholder = "텍스트를 입력해주세요";
      }

      if (editorElement?.innerText.length === 1) {
        editorElement.innerText = placeholder;
      }

      /** 엔터를 입력할 때마다 div 태그가 아닌 p태그로 개행을 진행해요 */
      editorDoc?.addEventListener("keydown", function (event) {
        if (event.keyCode === 13) {
          document.execCommand("defaultParagraphSeparator", false, "p");
        }
      });

      /** 텍스트 노드 방지를 위해 <p><br/></p> 처리를 해줘야해요 */
      editorDoc?.addEventListener("keyup", function (event) {
        if (event.keyCode === 8 && editorElement?.textContent?.length === 0) {
          editorElement.innerHTML = "<p><br/></p>";
        }
      });

      editorDoc?.addEventListener("click", function () {
        if (placeholder && editorElement?.innerText === placeholder) {
          editorElement.innerText = "";
        }
      });

      editorDoc?.addEventListener("focusout", function () {
        if (placeholder && editorElement?.textContent?.length === 0) {
          editorElement.innerText = placeholder;
        }
      });
    }
  };

  const iframeContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" type="text/css" href="./editor.css"/>
        <title>likelion editor</title>
      </head>
      <body id="editor" contenteditable="true" style="overflow-x: hidden; height: 100%; box-sizing: border-box; font-size:${
        defaultFontSize ? defaultFontSize : "0.8rem"
      };
      ${environmentColor === "color: white" && "color: #404040"};
      ${environmentColor === "color: dark" && "color: white"};
      ${!environmentColor && "color: #404040"};
      ">
      <p><br/></p>
      </body>
    </html>
  `;

  return (
    <div
      css={css`
        width: ${defaultWidth ? defaultWidth : "100%"};
      `}
    >
      <GlobalFonts />
      <Toolbar
        editorRef={editorRef}
        editorDoc={editorDoc}
        environmentColor={environmentColor}
      />
      {/* <Content
        contentBorderColor={contentBorderColor}
        contentBorderFocusColor={contentBorderFocusColor}
        defaultFontColor={defaultFontColor}
        defaultFontSize={defaultFontSize}
        ref={editorRef}
      /> */}
      <iframe
        title="editorIfr"
        id="editorContent"
        css={css`
          width: auto;
          height: auto;
          border: none;
          width: 100%;
          height: 30rem;
          border-radius: 0.5rem;
          background-color: ${
            environmentColor === "dark" ? "#212121" : "var(--greyOpacity50)"
          };
          overflow: auto;
          box-sizing: border-box;
          text-align: left;
      }
        `}
        ref={editorRef}
        srcDoc={iframeContent}
        onLoad={onLoadIfr}
      />
    </div>
  );
}

export default Editor;
