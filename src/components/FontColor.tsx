/** @jsxImportSource @emotion/react */
import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { ReactComponent as ColorPicker } from "../components/Icon/color.svg";
import { ReactComponent as BackgroundColor } from "../components/Icon/backgroundColor.svg";
import { toolBarType } from "./@types/type";
import {
  BlockPicker,
  ColorPickerProps,
  ColorResult,
  TwitterPicker,
} from "react-color";
import { IconDiv } from "./Toolbar";
import { fadeUp } from "../styles/keyframes";

let selection: any;
let range: any;

export default function FontColor({ id, editorRef }: toolBarType) {
  const [modalState, setModalState] = useState(false);
  const [color, setColor] = useState("");
  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("click", (event) => {
      if (pickerRef.current) {
        if (!pickerRef.current.contains(event.target as Node)) {
          setModalState(false);
        }
      }
    });

    // 이벤트 클린업
    return () => {
      document.removeEventListener("click", (event) => {
        if (pickerRef.current) {
          if (!pickerRef.current.contains(event.target as Node)) {
            window?.getSelection()?.removeAllRanges(); // 기존 선택 영역을 지웁니다.
            setModalState(false);
          }
        }
      });
    };
  }, []);

  useEffect(() => {
    if (modalState) {
      const inputNode = document
        .getElementsByClassName("block-picker")[0]
        ?.getElementsByTagName("input")[0];

      inputNode.addEventListener("input", function (event) {
        event.stopPropagation();
      });

      //   inputNode.addEventListener("mousedown", function (event) {
      //     // range.startContainer.parentNode.classList.add("selected");
      //     document.addEventListener("selectstart", function (event) {
      //       event.stopPropagation();
      //     });
      //   });

      //   inputNode.addEventListener("blur", function () {
      //     range.startContainer.parentNode.classList.remove("selected");
      //     document.removeEventListener("selectstart", function (event) {
      //       event.stopPropagation();
      //     });
      //   });
    }
  }, [modalState]);

  const pickerOn = () => {
    setModalState(true);
    if (editorRef?.current) {
      editorRef.current.focus();
    }
    selection = window.getSelection();
    range = selection.getRangeAt(0);
  };

  const handleChangeColor = useCallback(
    (color: string) => {
      setColor(color);
      let tmpRange = document.createRange();
      tmpRange.setStart(range.startContainer, range.startOffset);
      tmpRange.setEnd(range.endContainer, range.endOffset);
      window?.getSelection()?.removeAllRanges(); // 기존 선택 영역을 지웁니다.
      window?.getSelection()?.addRange(range); // 새로운 Range를 추가하여 선택합니다.
      document.execCommand("styleWithCSS");
      if (id === "colorPicker") {
        document.execCommand("foreColor", false, color);
      }
      if (id === "backgroundColor") {
        document.execCommand("hilitecolor", false, color);
      }
      setModalState(false);
    },
    [color]
  );

  function Palette() {
    return (
      <BlockPicker
        color={color}
        css={css`
          position: absolute !important;
          margin-top: 0.7rem;
          margin-left: -0.2rem;
          animation: 0.5s ease-in-out 0s 1 normal none running ${fadeUp};
        `}
        onChangeComplete={(color) => {
          handleChangeColor(color.hex);
        }}
      />
    );
  }

  return (
    <div ref={pickerRef}>
      <IconDiv onClick={pickerOn}>
        {id === "colorPicker" && (
          <ColorPicker width={"100%"} height={"100%"} id={id} />
        )}
        {id === "backgroundColor" && (
          <BackgroundColor width={"100%"} height={"100%"} id={id} />
        )}
      </IconDiv>
      {modalState && <Palette />}
    </div>
  );
}
