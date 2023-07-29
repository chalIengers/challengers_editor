var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { useCallback, useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import { ReactComponent as ColorPicker } from "../components/Icon/color.svg";
import { ReactComponent as BackgroundColor } from "../components/Icon/backgroundColor.svg";
import { BlockPicker } from "react-color";
import { IconDiv } from "./Toolbar";
import { fadeUp } from "../styles/keyframes";
export default function FontColor(_a) {
    var id = _a.id, editorRef = _a.editorRef;
    var _b = useState(false), modalState = _b[0], setModalState = _b[1];
    var _c = useState(""), color = _c[0], setColor = _c[1];
    var pickerRef = useRef(null);
    useEffect(function () {
        var editorDoc;
        if (editorRef === null || editorRef === void 0 ? void 0 : editorRef.current) {
            editorDoc = editorRef.current.contentDocument;
        }
        editorDoc === null || editorDoc === void 0 ? void 0 : editorDoc.addEventListener("click", function () {
            setModalState(false);
        });
        document.addEventListener("click", function (event) {
            if (pickerRef.current) {
                if (!pickerRef.current.contains(event.target)) {
                    setModalState(false);
                }
            }
        });
        // 이벤트 클린업
        return function () {
            editorDoc === null || editorDoc === void 0 ? void 0 : editorDoc.removeEventListener("click", function () {
                setModalState(false);
            });
            document.removeEventListener("click", function (event) {
                var _a;
                if (pickerRef.current) {
                    if (!pickerRef.current.contains(event.target)) {
                        (_a = window === null || window === void 0 ? void 0 : window.getSelection()) === null || _a === void 0 ? void 0 : _a.removeAllRanges(); // 기존 선택 영역을 지웁니다.
                        setModalState(false);
                    }
                }
            });
        };
    }, []);
    useEffect(function () {
        var _a;
        if (modalState) {
            var inputNode = (_a = document
                .getElementsByClassName("block-picker")[0]) === null || _a === void 0 ? void 0 : _a.getElementsByTagName("input")[0];
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
    var pickerOn = function () {
        setModalState(true);
        if (editorRef === null || editorRef === void 0 ? void 0 : editorRef.current) {
            editorRef.current.focus();
        }
        // selection = window.getSelection();
        // range = selection.getRangeAt(0);
    };
    var handleChangeColor = useCallback(function (color) {
        setColor(color);
        //   let tmpRange = document.createRange();
        //   tmpRange.setStart(range.startContainer, range.startOffset);
        //   tmpRange.setEnd(range.endContainer, range.endOffset);
        //   window?.getSelection()?.removeAllRanges(); // 기존 선택 영역을 지웁니다.
        //   window?.getSelection()?.addRange(range); // 새로운 Range를 추가하여 선택합니다.
        var editorDoc;
        if (editorRef === null || editorRef === void 0 ? void 0 : editorRef.current) {
            editorDoc = editorRef.current.contentDocument;
        }
        if (editorDoc) {
            editorDoc.execCommand("styleWithCSS");
            if (window.editorID + "_" + id ===
                window.editorID + "_" + "colorPicker") {
                editorDoc.execCommand("foreColor", false, color);
            }
            if (window.editorID + "_" + id ===
                window.editorID + "_" + "backgroundColor") {
                editorDoc.execCommand("hilitecolor", false, color);
            }
        }
        setModalState(false);
    }, [color]);
    function Palette() {
        return (_jsx(BlockPicker, { color: color, css: css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          position: absolute !important;\n          margin-top: 0.7rem;\n          margin-left: -0.2rem;\n          animation: 0.5s ease-in-out 0s 1 normal none running ", ";\n        "], ["\n          position: absolute !important;\n          margin-top: 0.7rem;\n          margin-left: -0.2rem;\n          animation: 0.5s ease-in-out 0s 1 normal none running ", ";\n        "])), fadeUp), onChangeComplete: function (color) {
                handleChangeColor(color.hex);
            } }));
    }
    return (_jsxs("div", __assign({ ref: pickerRef }, { children: [_jsxs(IconDiv, __assign({ onClick: pickerOn, title: id }, { children: [window.editorID + "_" + id ===
                        window.editorID + "_" + "colorPicker" && (_jsx(ColorPicker, { width: "100%", height: "100%", id: id })), window.editorID + "_" + id ===
                        window.editorID + "_" + "backgroundColor" && (_jsx(BackgroundColor, { width: "100%", height: "100%", id: id }))] })), modalState && _jsx(Palette, {})] })));
}
var templateObject_1;
