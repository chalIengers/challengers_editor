import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from "@testing-library/react";
import Main from "./Main";
test("renders learn react link", function () {
    render(_jsx(Main, {}));
    var linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
