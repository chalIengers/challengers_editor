/** @jsxImportSource @emotion/react */
import React, { forwardRef } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import editorType from "./@types/type";

export const Content = forwardRef(
  (
    {
      contentBorderColor,
      contentBorderFocusColor,
      defaultFontSize,
      defaultFontColor,
    }: editorType,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const changeTag = (event: React.KeyboardEvent) => {
      if (event.keyCode === 13) {
        document.execCommand("defaultParagraphSeparator", false, "p");
      }
    };

    return (
      <div
        contentEditable={true}
        css={css`
        border: none;
        width: 100%;
        height: 30rem;
        padding: 0.7rem;
        border-radius: 0.5rem;
        background-color: var(--greyOpacity50);
        line-height: 1.6rem;
        overflow: auto;
        box-sizing: border-box;
        text-align: left;
        font-size: ${defaultFontSize ? defaultFontSize : "1rem"};
        border-color: ${contentBorderColor ? contentBorderColor : ""};
        
        &:focus {
            box-shadow: ${
              contentBorderFocusColor
                ? contentBorderFocusColor
                : "var(--lightThemeBlue300)"
            } 0px 0px 0px 0.13em inset;
            outline: none;
            transition: all 0.4s ease 0s;
        }

        p {
          margin: 0;
        }
    }
      `}
        // onKeyDown={(event) => changeTag(event)}
        ref={ref}
      />
    );
  }
);

Content.displayName = "Content";

export default Content;
