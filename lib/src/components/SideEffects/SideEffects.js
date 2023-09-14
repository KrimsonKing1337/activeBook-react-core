"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SideEffects = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var store_1 = require("../../store");
var shadow_1 = require("../../store/effects/side/shadow");
var text_1 = require("../../store/effects/side/text");
var SideShadow_1 = require("./components/SideShadow");
var SideEffects_scss_1 = __importDefault(require("./SideEffects.scss"));
var SideEffects = function () {
    var sideShadowIsActive = (0, store_1.useSelector)(shadow_1.sideShadowEffectSelectors.isActive);
    var sideTextIsActive = (0, store_1.useSelector)(text_1.sideTextEffectSelectors.isActive);
    var sideShadowTemplate = (0, store_1.useSelector)(text_1.sideTextEffectSelectors.template);
    return ((0, jsx_runtime_1.jsxs)("div", { className: SideEffects_scss_1.default.sideEffects, children: [sideShadowIsActive && (0, jsx_runtime_1.jsx)(SideShadow_1.SideShadow, {}), sideTextIsActive && ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: sideShadowTemplate }))] }));
};
exports.SideEffects = SideEffects;
//# sourceMappingURL=SideEffects.js.map