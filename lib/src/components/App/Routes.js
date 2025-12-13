import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';
import { useSelector } from '../../store';
import { mainSelectors } from '../../store/main';
// todo: сделать все страницы либо через ленивую загрузку, либо по-обычному
// todo: в кордове проблемы с подгрузкой компонента через ленивую загрузку
// const Page1 = React.lazy(() => import('pagesOfBook/Page1'));
var getPageComponents = function (pages) {
    var arr = [];
    for (var i = 0; i <= pages; i++) {
        var PageComponent = require("pages/Page".concat(i))["Page".concat(i)];
        arr.push(PageComponent);
    }
    return arr;
};
export var Routes = function (_a) {
    var children = _a.children;
    var pages = useSelector(mainSelectors.pages);
    var pageComponents = getPageComponents(pages);
    return (_jsxs(ReactRouterRoutes, { children: [_jsx(Route, { path: "/", element: children }), pageComponents.map(function (PageComponent, i) {
                return (_jsx(Route, { path: "/page-".concat(i), element: _jsx(PageComponent, {}) }, i));
            })] }));
};
//# sourceMappingURL=Routes.js.map