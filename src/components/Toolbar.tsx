/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
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

  &:hover {
    background-color: var(--grey200);
  }

  svg {
    pointer-events: none;
  }
`;

export default function Toolbar({ editorRef }: editorType) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (editorRef?.current) {
      setLoading(false);
    }
  }, [editorRef]);

  const ToolBarArea = styled.div`
    width: 100%;
    height: 3rem;
    border-radius: 0.2rem;
    display: flex;
    padding-left: 0.2rem;
    justify-content: left;
    align-items: center;
    column-gap: 0.7rem;
    ${loading &&
    css`
      opacity: 30%;
      pointer-events: none;
    `}
  `;

  const cmd = (command: string) => {
    document.execCommand("styleWithCSS");
    document.execCommand(command);
    if (editorRef?.current) {
      editorRef?.current.focus();
    }
  };

  return (
    <ToolBarArea>
      {menuConfig.map((item, key) => {
        if (item.props.id === "space") {
          return <div key={key}> {item} </div>;
        } else if (item.props.id === "heading") {
          return <Heading editorRef={editorRef} />;
        } else if (item.props.id === "colorPicker") {
          return <FontColor editorRef={editorRef} id={item.props.id} />;
        } else if (item.props.id === "backgroundColor") {
          return <FontColor editorRef={editorRef} id={item.props.id} />;
        } else {
          return (
            <IconDiv key={key} onClick={() => cmd(item.props.id)}>
              {item}
            </IconDiv>
          );
        }
      })}
    </ToolBarArea>
  );
}
