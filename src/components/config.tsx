/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactComponent as Bold } from "../components/Icon/bold.svg";
import { ReactComponent as StrikeThrough } from "../components/Icon/strikeThrough.svg";
import { ReactComponent as Italic } from "../components/Icon/italic.svg";
import { ReactComponent as JustifyLeft } from "../components/Icon/justifyLeft.svg";
import { ReactComponent as JustifyCenter } from "../components/Icon/justifyCenter.svg";
import { ReactComponent as JustifyRight } from "../components/Icon/justfiyRight.svg";
import { ReactComponent as UnderLine } from "../components/Icon/underlined.svg";
import { ReactComponent as ColorPicker } from "../components/Icon/color.svg";
import { ReactComponent as Redo } from "../components/Icon/redo.svg";
import { ReactComponent as Undo } from "../components/Icon/undo.svg";

const Space = styled.hr`
  height: 1.6rem;
  margin: 0px;
  border-color: var(--greyOpacity300);
  border-radius: 5rem;
`;

export const menuConfig = [
  <Undo
    width={"100%"}
    height={"100%"}
    css={css`
      margin-top: -0.2rem;
    `}
    id="undo"
  />,
  <Redo
    width={"100%"}
    height={"100%"}
    css={css`
      margin-top: -0.2rem;
    `}
    id="redo"
  />,
  <Space id="space" />,
  <Bold
    width={"100%"}
    height={"100%"}
    css={css`
      margin-top: 0.1rem;
    `}
    id="bold"
  />,
  <Italic
    width={"100%"}
    height={"100%"}
    css={css`
      margin-top: 0.1rem;
    `}
    id="italic"
  />,
  <UnderLine
    width={"100%"}
    height={"100%"}
    css={css`
      margin-top: -0.1rem;
    `}
    id="underline"
  />,
  <StrikeThrough
    width={"100%"}
    height={"100%"}
    css={css`
      margin-top: 0.2rem;
    `}
    id="strikeThrough"
  />,
  <Space id="space" />,
  <JustifyLeft
    width={"100%"}
    height={"100%"}
    css={css`
      margin-top: -0.1rem;
    `}
    id="justifyLeft"
  />,
  <JustifyCenter
    width={"100%"}
    height={"100%"}
    css={css`
      margin-top: -0.1rem;
    `}
    id="justifyCenter"
  />,
  <JustifyRight
    width={"100%"}
    height={"100%"}
    css={css`
      margin-top: -0.1rem;
    `}
    id="justifyRight"
  />,
  <Space id="space" />,
  <ColorPicker width={"100%"} height={"100%"} id="colorPicker" />,
];
