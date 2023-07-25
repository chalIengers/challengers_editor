import React from "react";

export default interface editorType {
  contentBorderColor?: string;
  contentBorderFocusColor?: string;

  defaultFontColor?: string;
  defaultFontSize?: string;
  defaultWidth?: string;
  editorRef?: React.RefObject<HTMLDivElement>;
}

export interface toolBarType {
  id?: string;
  editorRef?: React.RefObject<HTMLDivElement>;
  state?: boolean;
  setState?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface headingType {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
