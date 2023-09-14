"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithModal = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Modal_1 = require("../../Modal");
var Action_1 = require("../../ColoredTextTrigger/Action");
var AuthorComment_1 = require("../../ColoredTextTrigger/AuthorComment");
var EasterEgg_1 = require("../../ColoredTextTrigger/EasterEgg");
var WithModal_scss_1 = __importDefault(require("./WithModal.scss"));
var WithModal = function (_a) {
    var children = _a.children, _b = _a.mode, mode = _b === void 0 ? 'media' : _b, text = _a.text, triggerType = _a.triggerType, eggId = _a.eggId;
    var _c = (0, react_1.useState)(false), isActive = _c[0], setIsActive = _c[1];
    var wrapperRef = (0, react_1.useRef)(null);
    var getTrigger = function () {
        if (triggerType === 'author') {
            return ((0, jsx_runtime_1.jsx)(AuthorComment_1.AuthorComment, { onClick: function () { return setIsActive(true); }, children: text }));
        }
        if (triggerType === 'egg') {
            if (!eggId) {
                console.error(new Error('Id for EasterEgg must be passed!'));
                return null;
            }
            return ((0, jsx_runtime_1.jsx)(EasterEgg_1.EasterEgg, { onClick: function () { return setIsActive(true); }, id: eggId, children: text }));
        }
        return ((0, jsx_runtime_1.jsx)(Action_1.Action, { onClick: function () { return setIsActive(true); }, children: text }));
    };
    (0, react_1.useEffect)(function () {
        if (!wrapperRef.current) {
            return;
        }
        var video = wrapperRef.current.querySelector('video');
        if (!video) {
            return;
        }
        if (isActive) {
            video.play();
        }
        else {
            video.pause();
            video.currentTime = 0;
        }
    }, [isActive]);
    var trigger = getTrigger();
    return ((0, jsx_runtime_1.jsxs)("div", { className: WithModal_scss_1.default.wrapper, ref: wrapperRef, children: [(0, jsx_runtime_1.jsx)(Modal_1.Modal, { isOpen: isActive, onClose: function () { return setIsActive(false); }, mode: mode, canCrop: true, cropDefault: false, canFullScreen: true, children: children }), trigger] }));
};
exports.WithModal = WithModal;
//# sourceMappingURL=WithModal.js.map