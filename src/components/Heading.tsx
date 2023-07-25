/** @jsxImportSource @emotion/react */
import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { menuConfig } from "./config";
import editorType, { headingType, toolBarType } from "./@types/type";
import { fadeUp } from "../styles/keyframes";
import { ReactComponent as Arrow } from "../components/Icon/arrow.svg";

let selection: any;
let range: any;

const HeadingBtn = ({ text, onClick }: headingType) => {
  return (
    <button
      type="button"
      css={css`
        width: 100%;
        height: 2.5rem;
        background-color: transparent;
        border: none;
        cursor: pointer;
        font-size: 0.8rem;

        border-radius: 0.2rem;
        padding: 0.1rem;
        box-sizing: border-box;
        cursor: pointer;
        transition: 0.3s all;

        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
          background-color: var(--grey200);
        }
      `}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

function HeadingContent({ editorRef, state, setState }: toolBarType) {
  const headingList = ["제목1", "제목2", "제목3", "본문1", "본문2", "본문3"];

  const test = (event: React.MouseEvent<HTMLButtonElement>) => {
    document.execCommand("bold");
    if (editorRef?.current) {
      editorRef.current.focus();
    }
    if (setState) {
      setState(false);
    }
  };

  return (
    <div
      css={css`
        display: ${state ? "flex" : "none"};
        position: absolute;
        width: 100%;
        margin-top: 1em;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid rgb(221, 221, 221);
        border-radius: 0.7em;
        box-shadow: rgba(230, 232, 234, 0.5) 0.2rem 0.2rem 0.5rem 0.2rem;
        background-color: white;
        row-gap: 0.5em;
        padding: 0.7em;
        box-sizing: border-box;
        animation: 0.5s ease-in-out 0s 1 normal none running ${fadeUp};
      `}
    >
      <div
        css={css`
          content: "";
          display: block;
          position: absolute;
          top: -6px;
          left: 50%;
          width: 10px;
          height: 10px;
          margin-left: -5px;
          border-left: 1px solid rgb(221, 221, 221);
          border-top: 1px solid rgb(221, 221, 221);
          background-color: rgb(255, 255, 255);
          transform: rotate(45deg);
        `}
      ></div>
      {headingList.map((item: string, key) => {
        return (
          <HeadingBtn key={key} text={item} onClick={(event) => test(event)} />
        );
      })}
    </div>
  );
}

export const Heading = ({ id, editorRef }: toolBarType) => {
  const [modalState, setModalState] = useState(false);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("click", (event) => {
      if (headingRef.current) {
        if (!headingRef.current.contains(event.target as Node)) {
          setModalState(false);
        }
      }
    });

    // 이벤트 클린업
    return () => {
      document.removeEventListener("click", (event) => {
        if (headingRef.current) {
          if (!headingRef.current.contains(event.target as Node)) {
            setModalState(false);
          }
        }
      });
    };
  }, []);

  const modalFocus = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setModalState(true);
    if (editorRef?.current) {
      editorRef?.current.focus();
    }

    // const tmpRange = document.createRange();
    // tmpRange.setStart(range.startContainer, range.startOffset);
    // tmpRange.setEnd(range.startContainer, range.endOffset);
    // window?.getSelection()?.removeAllRanges(); // 기존 선택 영역을 지웁니다.
    // window?.getSelection()?.addRange(range); // 새로운 Range를 추가하여 선택합니다.
  };

  const modalBlur = () => {
    setTimeout(() => {
      setModalState(false);
    }, 100);
  };

  return (
    <div
      css={css`
        width: auto;
        position: relative;
      `}
      ref={headingRef}
    >
      <div
        id={id}
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 0.8rem;
          column-gap: 1.6rem;
          cursor: pointer;
          width: 100%;
          box-sizing: border-box;
          padding-left: 1rem;

          svg {
            pointer-events: none;
          }
        `}
        onMouseDown={(event) => modalFocus(event)}
      >
        기본 값
        <Arrow width={"0.8rem"} height={"0.8rem"} />
      </div>
      <HeadingContent
        editorRef={editorRef}
        state={modalState}
        setState={setModalState}
      />
    </div>
  );
};
