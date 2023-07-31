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
import { useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import { fadeUp } from "../styles/keyframes";
import { ReactComponent as Arrow } from "../Icon/arrow.svg";
var HeadingBtn = function (_a) {
    var id = _a.id, text = _a.text, onClick = _a.onClick;
    return (_jsx("button", __assign({ id: window.editorID + "_" + id, type: "button", css: css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        width: 100%;\n        height: 2.5rem;\n        background-color: transparent;\n        border: none;\n        cursor: pointer;\n        font-size: 0.8rem;\n\n        border-radius: 0.2rem;\n        padding: 0.1rem;\n        box-sizing: border-box;\n        cursor: pointer;\n        transition: 0.3s all;\n\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        font-family: \"Pretendard-Regular\";\n        color: #404040;\n\n        &:hover {\n          background-color: var(--grey200);\n        }\n      "], ["\n        width: 100%;\n        height: 2.5rem;\n        background-color: transparent;\n        border: none;\n        cursor: pointer;\n        font-size: 0.8rem;\n\n        border-radius: 0.2rem;\n        padding: 0.1rem;\n        box-sizing: border-box;\n        cursor: pointer;\n        transition: 0.3s all;\n\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        font-family: \"Pretendard-Regular\";\n        color: #404040;\n\n        &:hover {\n          background-color: var(--grey200);\n        }\n      "]))), onClick: onClick }, { children: text })));
};
function HeadingContent(_a) {
    var editorRef = _a.editorRef, state = _a.state, setState = _a.setState;
    var headingList = ["제목1", "제목2", "제목3", "본문1", "본문2", "본문3"];
    var test = function (event) {
        var editorDoc;
        if (editorRef === null || editorRef === void 0 ? void 0 : editorRef.current) {
            editorDoc = editorRef.current.contentDocument;
        }
        if (editorDoc) {
            editorDoc.execCommand("styleWithCSS");
            switch (event.target.id) {
                case window.editorID + "_" + "제목1":
                    editorDoc.execCommand("fontSize", false, "6");
                    break;
                case window.editorID + "_" + "제목2":
                    editorDoc.execCommand("fontSize", false, "5");
                    break;
                case window.editorID + "_" + "제목3":
                    editorDoc.execCommand("fontSize", false, "4");
                    break;
                case window.editorID + "_" + "본문1":
                    editorDoc.execCommand("fontSize", false, "3");
                    break;
                case window.editorID + "_" + "본문2":
                    editorDoc.execCommand("fontSize", false, "2");
                    break;
                case window.editorID + "_" + "본문3":
                    editorDoc.execCommand("fontSize", false, "1");
                    break;
                default:
                    break;
            }
        }
        if (editorRef === null || editorRef === void 0 ? void 0 : editorRef.current) {
            var editorDoc_1 = editorRef.current
                .contentDocument;
            if (editorDoc_1) {
                editorDoc_1.body.focus();
            }
        }
        if (setState) {
            setState(false);
        }
    };
    return (_jsxs("div", __assign({ css: css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        display: ", ";\n        position: absolute;\n        width: 100%;\n        margin-top: 1em;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        border: 1px solid rgb(221, 221, 221);\n        border-radius: 0.7em;\n        box-shadow: rgba(230, 232, 234, 0.5) 0.2rem 0.2rem 0.5rem 0.2rem;\n        background-color: white;\n        row-gap: 0.5em;\n        padding: 0.7em;\n        box-sizing: border-box;\n        animation: 0.5s ease-in-out 0s 1 normal none running ", ";\n      "], ["\n        display: ", ";\n        position: absolute;\n        width: 100%;\n        margin-top: 1em;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        border: 1px solid rgb(221, 221, 221);\n        border-radius: 0.7em;\n        box-shadow: rgba(230, 232, 234, 0.5) 0.2rem 0.2rem 0.5rem 0.2rem;\n        background-color: white;\n        row-gap: 0.5em;\n        padding: 0.7em;\n        box-sizing: border-box;\n        animation: 0.5s ease-in-out 0s 1 normal none running ", ";\n      "])), state ? "flex" : "none", fadeUp) }, { children: [_jsx("div", { css: css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n          content: \"\";\n          display: block;\n          position: absolute;\n          top: -6px;\n          left: 50%;\n          width: 10px;\n          height: 10px;\n          margin-left: -5px;\n          border-left: 1px solid rgb(221, 221, 221);\n          border-top: 1px solid rgb(221, 221, 221);\n          background-color: rgb(255, 255, 255);\n          transform: rotate(45deg);\n        "], ["\n          content: \"\";\n          display: block;\n          position: absolute;\n          top: -6px;\n          left: 50%;\n          width: 10px;\n          height: 10px;\n          margin-left: -5px;\n          border-left: 1px solid rgb(221, 221, 221);\n          border-top: 1px solid rgb(221, 221, 221);\n          background-color: rgb(255, 255, 255);\n          transform: rotate(45deg);\n        "]))) }), headingList.map(function (item, key) {
                return (_jsx(HeadingBtn, { id: item, text: item, onClick: function (event) { return test(event); } }, key));
            })] })));
}
export var Heading = function (_a) {
    var id = _a.id, editorRef = _a.editorRef, environmentColor = _a.environmentColor;
    var _b = useState(false), modalState = _b[0], setModalState = _b[1];
    var headingRef = useRef(null);
    useEffect(function () {
        var editorDoc;
        if (editorRef === null || editorRef === void 0 ? void 0 : editorRef.current) {
            editorDoc = editorRef.current.contentDocument;
        }
        editorDoc === null || editorDoc === void 0 ? void 0 : editorDoc.addEventListener("click", function () {
            setModalState(false);
        });
        document.addEventListener("click", function (event) {
            if (headingRef.current) {
                if (!headingRef.current.contains(event.target)) {
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
                if (headingRef.current) {
                    if (!headingRef.current.contains(event.target)) {
                        setModalState(false);
                    }
                }
            });
        };
    }, []);
    var modalFocus = function (event) {
        event.preventDefault();
        setModalState(true);
        if (editorRef === null || editorRef === void 0 ? void 0 : editorRef.current) {
            editorRef === null || editorRef === void 0 ? void 0 : editorRef.current.focus();
        }
        // const tmpRange = document.createRange();
        // tmpRange.setStart(range.startContainer, range.startOffset);
        // tmpRange.setEnd(range.startContainer, range.endOffset);
        // window?.getSelection()?.removeAllRanges(); // 기존 선택 영역을 지웁니다.
        // window?.getSelection()?.addRange(range); // 새로운 Range를 추가하여 선택합니다.
    };
    var modalBlur = function () {
        setTimeout(function () {
            setModalState(false);
        }, 100);
    };
    return (_jsxs("div", __assign({ css: css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        width: auto;\n        position: relative;\n        padding-right: 0.3rem;\n        padding-left: 0.3rem;\n      "], ["\n        width: auto;\n        position: relative;\n        padding-right: 0.3rem;\n        padding-left: 0.3rem;\n      "]))), ref: headingRef }, { children: [_jsxs("div", __assign({ css: css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          font-size: 0.8rem;\n          column-gap: 0.7rem;\n          cursor: pointer;\n          width: 100%;\n          box-sizing: border-box;\n          padding-left: 1rem;\n          font-family: \"Pretendard-Regular\";\n\n          svg {\n            pointer-events: none;\n          }\n\n          ", "\n\n          ", "\n        "], ["\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          font-size: 0.8rem;\n          column-gap: 0.7rem;\n          cursor: pointer;\n          width: 100%;\n          box-sizing: border-box;\n          padding-left: 1rem;\n          font-family: \"Pretendard-Regular\";\n\n          svg {\n            pointer-events: none;\n          }\n\n          ", "\n\n          ", "\n        "])), environmentColor === "white" && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n            color: #404040;\n            svg line {\n              stroke: #404040;\n            }\n          "], ["\n            color: #404040;\n            svg line {\n              stroke: #404040;\n            }\n          "]))), environmentColor === "dark" && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n            color: white;\n            svg line {\n              stroke: white;\n            }\n          "], ["\n            color: white;\n            svg line {\n              stroke: white;\n            }\n          "])))), onMouseDown: function (event) { return modalFocus(event); } }, { children: [_jsx("span", __assign({ id: window.editorID + "_" + id }, { children: "\uBCF8\uBB382" })), _jsx(Arrow, { width: "0.5rem", height: "0.5rem" })] })), _jsx(HeadingContent, { editorRef: editorRef, state: modalState, setState: setModalState })] })));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
