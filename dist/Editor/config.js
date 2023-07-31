var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
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
var Space = styled.hr(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 1.6rem;\n  margin: 0px;\n  border: solid 1px;\n  border-color: var(--greyOpacity300);\n  border-radius: 4rem;\n"], ["\n  height: 1.6rem;\n  margin: 0px;\n  border: solid 1px;\n  border-color: var(--greyOpacity300);\n  border-radius: 4rem;\n"])));
export var menuConfig = [
    _jsx(Heading, { id: "heading" }),
    _jsx(Space, { id: "space" }),
    _jsx(Undo, { width: "100%", height: "100%", css: css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      margin-top: -0.2rem;\n    "], ["\n      margin-top: -0.2rem;\n    "]))), id: "undo" }),
    _jsx(Redo, { width: "100%", height: "100%", css: css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      margin-top: -0.2rem;\n    "], ["\n      margin-top: -0.2rem;\n    "]))), id: "redo" }),
    _jsx(Space, { id: "space" }),
    _jsx(FontColor, { id: "colorPicker" }),
    _jsx(FontColor, { id: "backgroundColor" }),
    _jsx(Bold, { width: "100%", height: "100%", css: css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      margin-top: 0.1rem;\n    "], ["\n      margin-top: 0.1rem;\n    "]))), id: "bold" }),
    _jsx(Italic, { width: "100%", height: "100%", css: css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      margin-top: 0.1rem;\n    "], ["\n      margin-top: 0.1rem;\n    "]))), id: "italic" }),
    _jsx(UnderLine, { width: "100%", height: "100%", css: css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      margin-top: -0.1rem;\n    "], ["\n      margin-top: -0.1rem;\n    "]))), id: "underline" }),
    _jsx(StrikeThrough, { width: "100%", height: "100%", css: css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      margin-top: 0.2rem;\n    "], ["\n      margin-top: 0.2rem;\n    "]))), id: "strikeThrough" }),
    _jsx(Space, { id: "space" }),
    _jsx(JustifyLeft, { width: "100%", height: "100%", css: css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n      margin-top: -0.1rem;\n    "], ["\n      margin-top: -0.1rem;\n    "]))), id: "justifyLeft" }),
    _jsx(JustifyCenter, { width: "100%", height: "100%", css: css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n      margin-top: -0.1rem;\n    "], ["\n      margin-top: -0.1rem;\n    "]))), id: "justifyCenter" }),
    _jsx(JustifyRight, { width: "100%", height: "100%", css: css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n      margin-top: -0.1rem;\n    "], ["\n      margin-top: -0.1rem;\n    "]))), id: "justifyRight" }),
];
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
