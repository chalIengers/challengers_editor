/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { ReactComponent as Bold } from "../components/Icon/bold.svg";
import { ReactComponent as StrikeThrough } from "../components/Icon/strikeThrough.svg";
import { ReactComponent as Italic } from "../components/Icon/italic.svg";
import { ReactComponent as JustifyLeft } from "../components/Icon/justifyLeft.svg";
import { ReactComponent as JustifyCenter } from "../components/Icon/justifyCenter.svg";
import { ReactComponent as JustifyRight } from "../components/Icon/justfiyRight.svg";
import { ReactComponent as UnderLine } from "../components/Icon/underlined.svg";
import { menuConfig } from "./config";

export default function Toolbar() {
  const IconDiv = styled.button`
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

  const ToolBarArea = styled.div`
    width: 100%;
    height: 3rem;
    border-radius: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 0.5rem;
    // background-color: var(--inverseGrey800);
  `;

  const cmd = (command: string) => {
    document.execCommand("styleWithCSS");
    document.execCommand(command);
  };

  return (
    <ToolBarArea>
      {menuConfig.map((item, key) => {
        if (item.props.id === "space") {
          return <div key={key}> {item} </div>;
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
