import React from "react";

export default interface editorType {
  contentBorderColor?: string;
  contentBorderFocusColor?: string;

  defaultFontColor?: string;
  defaultFontSize?: string;
  defaultWidth?: string;

  placeholder?: string;
  environmentColor?: string;

  editorRef?: React.RefObject<HTMLDivElement>;
  editorDoc?: HTMLElement | undefined | null;
  editorID?: string;
}

export interface toolBarType {
  id?: string;
  editorRef?: React.RefObject<HTMLDivElement>;
  state?: boolean;
  setState?: React.Dispatch<React.SetStateAction<boolean>>;
  environmentColor?: string;
}

export interface headingType {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  id: string;
}
