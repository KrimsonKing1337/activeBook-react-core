"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Counter = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var store_1 = require("../../store");
var counter_1 = require("../../store/counter");
var Counter_scss_1 = __importDefault(require("./Counter.scss"));
var Counter = function () {
    var dispatch = (0, store_1.useDispatch)();
    var count = (0, store_1.useSelector)(counter_1.counterSelectors.count);
    var minusClickHandler = function () {
        dispatch(counter_1.counterActions.decrement());
    };
    var plusClickHandler = function () {
        dispatch(counter_1.counterActions.increment());
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: Counter_scss_1.default.Wrapper, children: [(0, jsx_runtime_1.jsx)("button", { onClick: minusClickHandler, children: "-" }), (0, jsx_runtime_1.jsx)("div", { children: count }), (0, jsx_runtime_1.jsx)("button", { onClick: plusClickHandler, children: "+" })] }));
};
exports.Counter = Counter;
//# sourceMappingURL=Counter.js.map