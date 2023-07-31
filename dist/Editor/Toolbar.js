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
import { jsxs as _jsxs, jsx as _jsx } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { menuConfig } from "./config";
import { Heading } from "./Heading";
import FontColor from "./FontColor";
export var IconDiv = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  border-width: 0.15rem;\n  border-radius: 0.2rem;\n  padding: 0.1rem;\n  box-sizing: border-box;\n  cursor: pointer;\n  transition: 0.3s all;\n  background-color: transparent;\n  border: none;\n\n  svg {\n    pointer-events: none;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  border-width: 0.15rem;\n  border-radius: 0.2rem;\n  padding: 0.1rem;\n  box-sizing: border-box;\n  cursor: pointer;\n  transition: 0.3s all;\n  background-color: transparent;\n  border: none;\n\n  svg {\n    pointer-events: none;\n  }\n"])));
export default function Toolbar(_a) {
    var editorRef = _a.editorRef, editorDoc = _a.editorDoc, environmentColor = _a.environmentColor;
    var _b = useState(true), loading = _b[0], setLoading = _b[1];
    var featureList = [];
    var toolBarRef = useRef(null);
    useEffect(function () {
        if (editorDoc) {
            setLoading(false);
            // console.log(editorDoc);
            editorDoc.addEventListener("keydown", function () {
                active();
            });
            editorDoc.addEventListener("focus", function () {
                active();
            });
            editorDoc.addEventListener("click", function () {
                active();
            });
            document.addEventListener("click", function (event) {
                if (toolBarRef.current) {
                    if (!toolBarRef.current.contains(event.target)) {
                        notActive();
                    }
                }
            });
        }
    }, [editorDoc]);
    var ToolBarArea = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    width: 100%;\n    height: 100%;\n    border-radius: 0.2rem;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    display: flex;\n    padding-left: 0.2rem;\n    justify-content: left;\n    align-items: center;\n    column-gap: 0.7rem;\n    flex-wrap: wrap;\n    row-gap: 5px;\n    ", "\n\n    ", "\n\n    ", "\n  "], ["\n    width: 100%;\n    height: 100%;\n    border-radius: 0.2rem;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    display: flex;\n    padding-left: 0.2rem;\n    justify-content: left;\n    align-items: center;\n    column-gap: 0.7rem;\n    flex-wrap: wrap;\n    row-gap: 5px;\n    ", "\n\n    ", "\n\n    ", "\n  "])), loading && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      opacity: 30%;\n      pointer-events: none;\n    "], ["\n      opacity: 30%;\n      pointer-events: none;\n    "]))), environmentColor === "white" && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      svg path {\n        fill: #404040;\n      }\n\n      button:hover {\n        background-color: var(--grey200);\n      }\n\n      button.active {\n        background-color: #404040;\n        svg path {\n          fill: white;\n        }\n\n        &:hover {\n          background-color: var(--grey700);\n        }\n      }\n    "], ["\n      svg path {\n        fill: #404040;\n      }\n\n      button:hover {\n        background-color: var(--grey200);\n      }\n\n      button.active {\n        background-color: #404040;\n        svg path {\n          fill: white;\n        }\n\n        &:hover {\n          background-color: var(--grey700);\n        }\n      }\n    "]))), environmentColor === "dark" && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      svg path {\n        fill: white;\n      }\n\n      button:hover {\n        background-color: var(--grey900);\n      }\n\n      button.active {\n        background-color: white;\n        svg path {\n          fill: #404040;\n        }\n\n        &:hover {\n          background-color: var(--grey300);\n        }\n      }\n    "], ["\n      svg path {\n        fill: white;\n      }\n\n      button:hover {\n        background-color: var(--grey900);\n      }\n\n      button.active {\n        background-color: white;\n        svg path {\n          fill: #404040;\n        }\n\n        &:hover {\n          background-color: var(--grey300);\n        }\n      }\n    "]))));
    useEffect(function () {
        var editorDoc;
        if (editorRef === null || editorRef === void 0 ? void 0 : editorRef.current) {
            editorDoc = editorRef.current.contentDocument;
        }
        if (editorDoc) {
            if (environmentColor) {
                featureList.map(function (item) {
                    var _a, _b;
                    if (environmentColor === "dark") {
                        (_a = document.querySelector("button#".concat(item))) === null || _a === void 0 ? void 0 : _a.classList.add("dark");
                    }
                    if (environmentColor === "white") {
                        (_b = document.querySelector("button#".concat(item))) === null || _b === void 0 ? void 0 : _b.classList.add("white");
                    }
                });
            }
        }
    }, []);
    var cmd = function (command) {
        var editorDoc;
        if (editorRef === null || editorRef === void 0 ? void 0 : editorRef.current) {
            editorDoc = editorRef.current.contentDocument;
        }
        if (editorDoc) {
            editorDoc.execCommand("styleWithCSS");
            editorDoc.execCommand(command);
            active();
        }
        if (editorRef === null || editorRef === void 0 ? void 0 : editorRef.current) {
            var editorDoc_1 = editorRef.current
                .contentDocument;
            if (editorDoc_1) {
                editorDoc_1.body.focus();
            }
        }
    };
    var active = function () {
        var editorDoc;
        if (editorRef === null || editorRef === void 0 ? void 0 : editorRef.current) {
            editorDoc = editorRef.current.contentDocument;
        }
        if (editorDoc) {
            if (editorDoc === null || editorDoc === void 0 ? void 0 : editorDoc.queryCommandValue("fontSize")) {
                var currentHeading = document.querySelector("span#".concat(window.editorID + "_" + "heading"));
                switch (editorDoc === null || editorDoc === void 0 ? void 0 : editorDoc.queryCommandValue("fontSize")) {
                    case "6":
                        if (currentHeading) {
                            currentHeading.innerText = "제목1";
                        }
                        break;
                    case "5":
                        if (currentHeading) {
                            currentHeading.innerText = "제목2";
                        }
                        break;
                    case "4":
                        if (currentHeading) {
                            currentHeading.innerText = "제목3";
                        }
                        break;
                    case "3":
                        if (currentHeading) {
                            currentHeading.innerText = "본문1";
                        }
                        break;
                    case "2":
                        if (currentHeading) {
                            currentHeading.innerText = "본문2";
                        }
                        break;
                    case "3":
                        if (currentHeading) {
                            currentHeading.innerText = "본문3";
                        }
                        break;
                    default:
                        break;
                }
            }
        }
        if (editorDoc) {
            featureList.map(function (item) {
                var _a, _b;
                if (editorDoc === null || editorDoc === void 0 ? void 0 : editorDoc.queryCommandState(item)) {
                    (_a = document
                        .querySelector("button#".concat(window.editorID + "_" + item))) === null || _a === void 0 ? void 0 : _a.classList.add("active");
                }
                else {
                    // console.log(item);
                    (_b = document
                        .querySelector("button#".concat(window.editorID + "_" + item))) === null || _b === void 0 ? void 0 : _b.classList.remove("active");
                }
            });
        }
    };
    var notActive = function () {
        var editorDoc;
        if (editorRef === null || editorRef === void 0 ? void 0 : editorRef.current) {
            editorDoc = editorRef.current.contentDocument;
        }
        if (editorDoc) {
            featureList.map(function (item) {
                var _a;
                (_a = document
                    .querySelector("button#".concat(window.editorID + "_" + item))) === null || _a === void 0 ? void 0 : _a.classList.remove("active");
            });
        }
    };
    return (_jsx(ToolBarArea, __assign({ ref: toolBarRef }, { children: menuConfig.map(function (item, key) {
            if (item.props.id === "space") {
                return _jsxs("div", { children: [" ", item, " "] }, key);
            }
            else if (item.props.id === "heading") {
                return (_jsx(Heading, { editorRef: editorRef, environmentColor: environmentColor, id: item.props.id }, key));
            }
            else if (item.props.id === "colorPicker") {
                return (_jsx(FontColor, { editorRef: editorRef, id: item.props.id }, key));
            }
            else if (item.props.id === "backgroundColor") {
                return (_jsx(FontColor, { editorRef: editorRef, id: item.props.id }, key));
            }
            else {
                featureList.push(item.props.id);
                return (_jsx(IconDiv, __assign({ onClick: function () { return cmd(item.props.id); }, title: item.props.id, id: window.editorID + "_" + item.props.id }, { children: item }), key));
            }
        }) })));
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
