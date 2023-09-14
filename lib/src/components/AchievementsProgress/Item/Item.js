"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = __importDefault(require("classnames"));
var Item_scss_1 = __importDefault(require("./Item.scss"));
var Item = function (_a) {
    var title = _a.title, status = _a.status, type = _a.type;
    var statusLabel = status ? 'Получено' : 'В процессе';
    var itemClassNames = (0, classnames_1.default)([
        Item_scss_1.default.item,
        type,
    ]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: itemClassNames, children: [(0, jsx_runtime_1.jsx)("div", { className: Item_scss_1.default.title, children: title }), (0, jsx_runtime_1.jsx)("div", { className: Item_scss_1.default.status, children: statusLabel })] }));
};
exports.Item = Item;
//# sourceMappingURL=Item.js.map