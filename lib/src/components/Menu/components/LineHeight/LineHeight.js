"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineHeight = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = __importDefault(require("classnames"));
var store_1 = require("../../../../store");
var config_1 = require("../../../../store/config");
var Label_1 = require("../../../Label");
var getNewValueForNarrativeTextStyle_1 = require("../../../../utils/styles/getNewValueForNarrativeTextStyle");
var LineHeight_scss_1 = __importDefault(require("./LineHeight.scss"));
function getClassNames(className) {
    return (0, classnames_1.default)([
        LineHeight_scss_1.default.item,
        className,
    ]);
}
var LineHeight = function () {
    var dispatch = (0, store_1.useDispatch)();
    var lineHeight = (0, store_1.useSelector)(config_1.configSelectors.lineHeight);
    var dispatchSetLineHeight = function (isMoreAction) {
        var lineHeightNewValue = (0, getNewValueForNarrativeTextStyle_1.getNewValueForNarrativeTextStyle)(lineHeight, isMoreAction);
        if (lineHeightNewValue === lineHeight) {
            return;
        }
        dispatch(config_1.configActions.setLineHeight(lineHeightNewValue));
    };
    var minusClickHandler = function () {
        dispatchSetLineHeight(false);
    };
    var plusClickHandler = function () {
        dispatchSetLineHeight(true);
    };
    var currentValueLabel = "".concat(lineHeight, "%");
    return ((0, jsx_runtime_1.jsxs)("div", { className: LineHeight_scss_1.default.lineHeight, children: [(0, jsx_runtime_1.jsx)(Label_1.Label, { label: "\u041C\u0435\u0436\u0441\u0442\u0440\u043E\u0447\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B" }), (0, jsx_runtime_1.jsxs)("div", { className: LineHeight_scss_1.default.itemsWrapper, children: [(0, jsx_runtime_1.jsx)("div", { className: getClassNames(LineHeight_scss_1.default.isMinus), onClick: minusClickHandler, children: "-" }), (0, jsx_runtime_1.jsx)("div", { className: getClassNames(LineHeight_scss_1.default.isValue), children: currentValueLabel }), (0, jsx_runtime_1.jsx)("div", { className: getClassNames(LineHeight_scss_1.default.isPlus), onClick: plusClickHandler, children: "+" })] })] }));
};
exports.LineHeight = LineHeight;
//# sourceMappingURL=LineHeight.js.map