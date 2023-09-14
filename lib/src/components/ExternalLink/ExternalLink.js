"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalLink = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var ExternalLink_scss_1 = __importDefault(require("./ExternalLink.scss"));
var ExternalLink = function (_a) {
    var href = _a.href, children = _a.children;
    return ((0, jsx_runtime_1.jsxs)("a", { href: href, target: "_blank", rel: "noopener noreferrer", className: ExternalLink_scss_1.default.link, children: [' ', children] }));
};
exports.ExternalLink = ExternalLink;
//# sourceMappingURL=ExternalLink.js.map