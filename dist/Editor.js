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
import { useRef, useState } from "react";
import { css } from "@emotion/react";
import Toolbar from "./components/Toolbar";
import GlobalFonts from "./styles/GlobalFonts";
import "./index.css";
export function Editor(_a) {
    var defaultFontSize = _a.defaultFontSize, defaultWidth = _a.defaultWidth, editorID = _a.editorID, environmentColor = _a.environmentColor, _b = _a.placeholder, placeholder = _b === void 0 ? "텍스트를 입력해주세요" : _b;
    var editorRef = useRef(null);
    var _c = useState(undefined), editorDoc = _c[0], setEditorDoc = _c[1];
    var randomID = new Date().getMilliseconds();
    if (editorID) {
        window.editorID = editorID;
    }
    else {
        window.editorID = "likelion".concat(randomID);
    }
    var onLoadIfr = function () {
        if (editorRef === null || editorRef === void 0 ? void 0 : editorRef.current) {
            var iframeRef = editorRef.current.contentWindow;
            var editorDoc_1 = iframeRef === null || iframeRef === void 0 ? void 0 : iframeRef.document;
            var editorElement_1 = editorDoc_1 === null || editorDoc_1 === void 0 ? void 0 : editorDoc_1.getElementById("editor");
            setEditorDoc(editorElement_1);
            if (!placeholder) {
                placeholder = "텍스트를 입력해주세요";
            }
            if ((editorElement_1 === null || editorElement_1 === void 0 ? void 0 : editorElement_1.innerText.length) === 1) {
                editorElement_1.innerText = placeholder;
            }
            /** 엔터를 입력할 때마다 div 태그가 아닌 p태그로 개행을 진행해요 */
            editorDoc_1 === null || editorDoc_1 === void 0 ? void 0 : editorDoc_1.addEventListener("keydown", function (event) {
                if (event.keyCode === 13) {
                    document.execCommand("defaultParagraphSeparator", false, "p");
                }
            });
            /** 텍스트 노드 방지를 위해 <p><br/></p> 처리를 해줘야해요 */
            editorDoc_1 === null || editorDoc_1 === void 0 ? void 0 : editorDoc_1.addEventListener("keyup", function (event) {
                var _a;
                if (event.keyCode === 8 && ((_a = editorElement_1 === null || editorElement_1 === void 0 ? void 0 : editorElement_1.textContent) === null || _a === void 0 ? void 0 : _a.length) === 0) {
                    editorElement_1.innerHTML = "<p><br/></p>";
                }
            });
            editorDoc_1 === null || editorDoc_1 === void 0 ? void 0 : editorDoc_1.addEventListener("click", function () {
                if (placeholder && (editorElement_1 === null || editorElement_1 === void 0 ? void 0 : editorElement_1.innerText) === placeholder) {
                    editorElement_1.innerText = "";
                }
            });
            editorDoc_1 === null || editorDoc_1 === void 0 ? void 0 : editorDoc_1.addEventListener("focusout", function () {
                var _a;
                if (placeholder && ((_a = editorElement_1 === null || editorElement_1 === void 0 ? void 0 : editorElement_1.textContent) === null || _a === void 0 ? void 0 : _a.length) === 0) {
                    editorElement_1.innerText = placeholder;
                }
            });
        }
    };
    var iframeContent = "\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <link rel=\"stylesheet\" type=\"text/css\" href=\"./editor.css\"/>\n        <title>likelion editor</title>\n      </head>\n      <body id=\"editor\" contenteditable=\"true\" style=\"overflow-x: hidden; height: 100%; box-sizing: border-box; font-size:".concat(defaultFontSize ? defaultFontSize : "0.8rem", ";\n      ").concat(environmentColor === "color: white" && "color: #404040", ";\n      ").concat(environmentColor === "color: dark" && "color: white", ";\n      ").concat(!environmentColor && "color: #404040", ";\n      \">\n      <p><br/></p>\n      </body>\n    </html>\n  ");
    return (_jsxs("div", __assign({ css: css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        width: ", ";\n      "], ["\n        width: ", ";\n      "])), defaultWidth ? defaultWidth : "100%") }, { children: [_jsx(GlobalFonts, {}), _jsx(Toolbar, { editorRef: editorRef, editorDoc: editorDoc, environmentColor: environmentColor }), _jsx("iframe", { title: "editorIfr", id: "editorContent", css: css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          width: auto;\n          height: auto;\n          border: none;\n          width: 100%;\n          height: 30rem;\n          border-radius: 0.5rem;\n          background-color: ", ";\n          overflow: auto;\n          box-sizing: border-box;\n          text-align: left;\n      }\n        "], ["\n          width: auto;\n          height: auto;\n          border: none;\n          width: 100%;\n          height: 30rem;\n          border-radius: 0.5rem;\n          background-color: ", ";\n          overflow: auto;\n          box-sizing: border-box;\n          text-align: left;\n      }\n        "])), environmentColor === "dark" ? "#212121" : "var(--greyOpacity50)"), ref: editorRef, srcDoc: iframeContent, onLoad: onLoadIfr })] })));
}
export default Editor;
var templateObject_1, templateObject_2;
