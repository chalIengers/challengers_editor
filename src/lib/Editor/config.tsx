/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactComponent as Bold } from "../Icon/bold.svg";
import { ReactComponent as StrikeThrough } from "../Icon/strikeThrough.svg";
import { ReactComponent as Italic } from "../Icon/italic.svg";
import { ReactComponent as JustifyLeft } from "..//Icon/justifyLeft.svg";
import { ReactComponent as JustifyCenter } from "../Icon/justifyCenter.svg";
import { ReactComponent as JustifyRight } from "../Icon/justfiyRight.svg";
import { ReactComponent as UnderLine } from "../Icon/underlined.svg";
import { ReactComponent as Redo } from "../Icon/redo.svg";
import { ReactComponent as Undo } from "../Icon/undo.svg";
import { Heading } from "./Heading";
import FontColor from "./FontColor";

const Space = styled.hr`
  height: 1.6rem;
  margin: 0px;
  border: solid 1px;
  border-color: var(--greyOpacity300);
  border-radius: 4rem;
`;

export const menuConfig = [
  <Heading id="heading" />,
  <Space id="space" />,
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
  <FontColor id="colorPicker" />,
  <FontColor id="backgroundColor" />,
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
];
