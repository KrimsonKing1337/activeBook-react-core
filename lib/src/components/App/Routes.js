"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var slice_1 = require("../../store/main/slice");
// todo: сделать все страницы либо через ленивую загрузку, либо по-обычному
// todo: в кордове проблемы с подгрузкой компонента через ленивую загрузку
// const Page1 = React.lazy(() => import('pagesOfBook/Page1'));
var getPageComponents = function () {
    var pages = slice_1.initialState.pages;
    var arr = [];
    for (var i = 0; i <= pages; i++) {
        var PageComponent = require("book_pages/Page".concat(i))["Page".concat(i)];
        arr.push(PageComponent);
    }
    return arr;
};
var Routes = function (_a) {
    var children = _a.children;
    var pageComponents = getPageComponents();
    return ((0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: children }), pageComponents.map(function (PageComponent, i) {
                return ((0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/page-".concat(i), element: (0, jsx_runtime_1.jsx)(PageComponent, {}) }, i));
            })] }));
};
exports.Routes = Routes;
//# sourceMappingURL=Routes.js.map