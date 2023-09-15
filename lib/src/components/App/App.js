"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var rr6_1 = require("redux-first-history/rr6");
var store_1 = require("../../store");
var components_1 = require("..");
var AppWrapper_1 = require("../AppWrapper");
var hideAddressBarInMobileDevices_1 = require("../../utils/mobile/hideAddressBarInMobileDevices");
var keyboardControl_1 = require("../../utils/control/keyboardControl");
var Routes_1 = require("./Routes");
var App = function (_a) {
    var rangeEffectsJson = _a.rangeEffectsJson, children = _a.children;
    (0, react_1.useEffect)(function () {
        // addTouchSupportForCssHover(); // вместо этого просто "удаляю" :hover везде, возможно так и оставлю
        (0, keyboardControl_1.addKeyboardControl)();
        (0, hideAddressBarInMobileDevices_1.hideAddressBarInMobileDevices)();
    }, []);
    return ((0, jsx_runtime_1.jsx)(store_1.StoreProvider, { children: (0, jsx_runtime_1.jsx)(rr6_1.HistoryRouter, { history: store_1.history, children: (0, jsx_runtime_1.jsxs)(AppWrapper_1.AppWrapper, { rangeEffectsJson: rangeEffectsJson, children: [(0, jsx_runtime_1.jsx)(components_1.Counter, {}), (0, jsx_runtime_1.jsx)(Routes_1.Routes, { children: children })] }) }) }));
};
exports.App = App;
//# sourceMappingURL=App.js.map