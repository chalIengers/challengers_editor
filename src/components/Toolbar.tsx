/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { menuConfig } from "./config";
import editorType from "./@types/type";
import { Heading } from "./Heading";
import FontColor from "./FontColor";

export const IconDiv = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-width: 0.15rem;
  border-radius: 0.2rem;
  padding: 0.1rem;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.3s all;
  background-color: transparent;
  border: none;

  svg {
    pointer-events: none;
  }
`;

export default function Toolbar({
  editorRef,
  editorDoc,
  environmentColor,
}: editorType) {
  const [loading, setLoading] = useState(true);
  const [svgLoading, setSvgLoading] = useState(true);
  const featureList: string[] = [];
  const toolBarRef = useRef(null);

  useEffect(() => {
    if (editorDoc) {
      setLoading(false);

      editorDoc.addEventListener("keydown", function () {
        active();
      });

      editorDoc.addEventListener("focus", function () {
        active();
      });

      editorDoc.addEventListener("click", function () {
        active();
      });

      document.addEventListener("click", function (event) {
        if (toolBarRef.current) {
          if (
            !(toolBarRef.current as HTMLDivElement).contains(
              event.target as Node
            )
          ) {
            notActive();
          }
        }
      });
    }
  }, [editorDoc]);

  const ToolBarArea = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 0.2rem;
    padding-top: 5px;
    padding-bottom: 5px;
    display: flex;
    padding-left: 0.2rem;
    justify-content: left;
    align-items: center;
    column-gap: 0.7rem;
    flex-wrap: wrap;
    row-gap: 5px;
    ${loading &&
    css`
      opacity: 30%;
      pointer-events: none;
    `}

    ${environmentColor === "white" &&
    css`
      svg path {
        fill: #404040;
      }

      button:hover {
        background-color: var(--grey200);
      }

      button.active {
        background-color: #404040;
        svg path {
          fill: white;
        }

        &:hover {
          background-color: var(--grey700);
        }
      }
    `}

    ${environmentColor === "dark" &&
    css`
      svg path {
        fill: white;
      }

      button:hover {
        background-color: var(--grey900);
      }

      button.active {
        background-color: white;
        svg path {
          fill: #404040;
        }

        &:hover {
          background-color: var(--grey300);
        }
      }
    `}
  `;

  useEffect(() => {
    let editorDoc: Document | null | undefined;

    if (editorRef?.current) {
      editorDoc = (editorRef.current as HTMLIFrameElement).contentDocument;
    }

    if (editorDoc) {
      if (environmentColor) {
        featureList.map((item) => {
          if (environmentColor === "dark") {
            document.querySelector(`button#${item}`)?.classList.add("dark");
          }
          if (environmentColor === "white") {
            document.querySelector(`button#${item}`)?.classList.add("white");
          }
        });
      }
    }
  }, []);

  const cmd = (command: string) => {
    let editorDoc: Document | null | undefined;

    if (editorRef?.current) {
      editorDoc = (editorRef.current as HTMLIFrameElement).contentDocument;
    }

    if (editorDoc) {
      editorDoc.execCommand("styleWithCSS");
      editorDoc.execCommand(command);
      active();
    }
    if (editorRef?.current) {
      const editorDoc = (editorRef.current as HTMLIFrameElement)
        .contentDocument;
      if (editorDoc) {
        editorDoc.body.focus();
      }
    }
  };

  const active = () => {
    let editorDoc: Document | null | undefined;

    if (editorRef?.current) {
      editorDoc = (editorRef.current as HTMLIFrameElement).contentDocument;
    }

    if (editorDoc) {
      if (editorDoc?.queryCommandValue("fontSize")) {
        const currentHeading = document.querySelector(
          `span#${window.editorID + "_" + "heading"}`
        );
        switch (editorDoc?.queryCommandValue("fontSize")) {
          case "6":
            if (currentHeading) {
              (currentHeading as HTMLDivElement).innerText = "제목1";
            }
            break;
          case "5":
            if (currentHeading) {
              (currentHeading as HTMLDivElement).innerText = "제목2";
            }
            break;
          case "4":
            if (currentHeading) {
              (currentHeading as HTMLDivElement).innerText = "제목3";
            }
            break;
          case "3":
            if (currentHeading) {
              (currentHeading as HTMLDivElement).innerText = "본문1";
            }
            break;
          case "2":
            if (currentHeading) {
              (currentHeading as HTMLDivElement).innerText = "본문2";
            }
            break;
          case "3":
            if (currentHeading) {
              (currentHeading as HTMLDivElement).innerText = "본문3";
            }
            break;

          default:
            break;
        }
      }
    }

    if (editorDoc) {
      featureList.map((item) => {
        if (editorDoc?.queryCommandState(item)) {
          document
            .querySelector(`button#${window.editorID + "_" + item}`)
            ?.classList.add("active");
        } else {
          // console.log(item);
          document
            .querySelector(`button#${window.editorID + "_" + item}`)
            ?.classList.remove("active");
        }
      });
    }
  };

  const notActive = () => {
    let editorDoc: Document | null | undefined;

    if (editorRef?.current) {
      editorDoc = (editorRef.current as HTMLIFrameElement).contentDocument;
    }

    if (editorDoc) {
      featureList.map((item) => {
        document
          .querySelector(`button#${window.editorID + "_" + item}`)
          ?.classList.remove("active");
      });
    }
  };

  return (
    <ToolBarArea ref={toolBarRef}>
      {menuConfig.map((item, key) => {
        if (item.props.id === "space") {
          return <div key={key}> {item} </div>;
        } else if (item.props.id === "heading") {
          return (
            <Heading
              editorRef={editorRef}
              environmentColor={environmentColor}
              key={key}
              id={item.props.id}
            />
          );
        } else if (item.props.id === "colorPicker") {
          return (
            <FontColor key={key} editorRef={editorRef} id={item.props.id} />
          );
        } else if (item.props.id === "backgroundColor") {
          return (
            <FontColor key={key} editorRef={editorRef} id={item.props.id} />
          );
        } else {
          featureList.push(item.props.id);
          return (
            <IconDiv
              key={key}
              onClick={() => cmd(item.props.id)}
              title={item.props.id}
              id={window.editorID + "_" + item.props.id}
            >
              {item}
            </IconDiv>
          );
        }
      })}
    </ToolBarArea>
  );
}
