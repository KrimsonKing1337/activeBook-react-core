"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var hammerjs_1 = __importDefault(require("hammerjs"));
var nanoid_1 = require("nanoid");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var classnames_1 = __importDefault(require("classnames"));
var Modal_scss_1 = __importDefault(require("./Modal.scss"));
/*
* ниже я реализовал механику на window.location и window.history,
* потому что при использовании хуков из react-router - location неактуальный,
* из-за чего модалка открывается и сразу же закрывается.
* мб дело в redux-first-history, что все действия с location нужно производить через стор и саги.
*/
var Modal = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h;
    var children = _a.children, onClose = _a.onClose, isOpen = _a.isOpen, _j = _a.mode, mode = _j === void 0 ? 'text' : _j, _k = _a.canClose, canClose = _k === void 0 ? true : _k, _l = _a.canFullScreen, canFullScreen = _l === void 0 ? false : _l, _m = _a.fullScreenDefault, fullScreenDefault = _m === void 0 ? false : _m, _o = _a.canCrop, canCrop = _o === void 0 ? false : _o, _p = _a.cropDefault, cropDefault = _p === void 0 ? true : _p;
    // здесь реф-версии нужны для хаммера, обычные для того чтобы ре-рендер срабатывал
    var isFullScreenRef = (0, react_1.useRef)(false);
    var isCropRef = (0, react_1.useRef)(true);
    var isZoomingRef = (0, react_1.useRef)(false);
    var _q = (0, react_1.useState)(fullScreenDefault), isFullScreen = _q[0], setIsFullScreen = _q[1];
    var _r = (0, react_1.useState)(cropDefault), isCrop = _r[0], setIsCrop = _r[1];
    var _s = (0, react_1.useState)(''), componentUuid = _s[0], setComponentUuid = _s[1];
    var overflowRef = (0, react_1.useRef)(null);
    var wrapperRef = (0, react_1.useRef)(null);
    var iconCloseRef = (0, react_1.useRef)(null);
    var iconExpandRef = (0, react_1.useRef)(null);
    var iconCompressRef = (0, react_1.useRef)(null);
    var iconCropRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var uuidValue = (0, nanoid_1.nanoid)();
        setComponentUuid(uuidValue);
    }, []);
    var escPressHandler = function (e) {
        if (e.key === 'Escape') {
            close();
        }
    };
    (0, react_1.useEffect)(function () {
        window.addEventListener('popstate', function () {
            if (!window.location.hash) {
                close();
            }
        });
    }, []);
    (0, react_1.useEffect)(function () {
        if (!isOpen) {
            document.removeEventListener('keydown', escPressHandler);
            return;
        }
        var path = "#/modal/".concat(componentUuid);
        window.history.pushState('', '', path);
        document.addEventListener('keydown', escPressHandler);
    }, [isOpen]);
    (0, react_1.useEffect)(function () {
        if (!wrapperRef.current) {
            return;
        }
        var wrapperWidth = wrapperRef.current.clientWidth;
        var applyStyleLeftForElement = function (element) {
            element.style.left = "".concat(wrapperWidth, "px");
        };
        var iconClose = iconCloseRef.current;
        var iconExpand = iconExpandRef.current;
        var iconCompress = iconCompressRef.current;
        var iconCrop = iconCropRef.current;
        if (!iconClose || !iconExpand || !iconCompress || !iconCrop) {
            return;
        }
        var arr = [iconClose, iconExpand, iconCompress, iconCrop];
        arr.forEach(function (cur) { return applyStyleLeftForElement(cur); });
    }, [isOpen]);
    (0, react_1.useEffect)(function () {
        if (!overflowRef.current) {
            return;
        }
        var hammertime = new hammerjs_1.default(overflowRef.current);
        hammertime.get('tap').set({
            taps: 2,
        });
        hammertime.get('pinch').set({
            enable: true,
            threshold: 0.5,
        });
        hammertime.on('tap', doubleTapHandler);
        hammertime.on('pinchout', zoomInHandler);
        hammertime.on('pinchin', zoomOutHandler);
        hammertime.on('pinchend pinchcancel', function () {
            isZoomingRef.current = false;
        });
        return function () {
            isZoomingRef.current = false;
            hammertime.off('tap');
            hammertime.off('pinch');
            hammertime.destroy();
        };
    }, []);
    var close = function () {
        if (!canClose) {
            return;
        }
        window.history.pushState(null, '', '/');
        if (onClose) {
            onClose();
        }
    };
    var closeIconClickHandler = function () { return close(); };
    var overflowClickHandler = function () { return close(); };
    var doubleTapHandler = function () {
        if (!canFullScreen) {
            return;
        }
        isFullScreenRef.current = !isFullScreenRef.current;
        setIsFullScreen(isFullScreenRef.current);
    };
    var zoomInHandler = function () {
        if (!canFullScreen) {
            return;
        }
        if (!isFullScreenRef.current) {
            isZoomingRef.current = true;
            isFullScreenRef.current = true;
            setIsFullScreen(true);
            return;
        }
        if (!canCrop) {
            return;
        }
        if (!isZoomingRef.current) {
            isCropRef.current = true;
            setIsCrop(true);
        }
    };
    var zoomOutHandler = function () {
        if (isCropRef.current) {
            isZoomingRef.current = true;
            isCropRef.current = false;
            setIsCrop(false);
            return;
        }
        if (!isZoomingRef.current) {
            isFullScreenRef.current = false;
            setIsFullScreen(false);
        }
    };
    var iconExpandClickHandler = function () {
        isFullScreenRef.current = true;
        setIsFullScreen(true);
    };
    var iconCompressClickHandler = function () {
        isFullScreenRef.current = false;
        setIsFullScreen(false);
    };
    var iconCropClickHandler = function () {
        isCropRef.current = !isCropRef.current;
        setIsCrop(!isCrop);
    };
    var isMediaMode = mode === 'media';
    var overflowClassNames = (0, classnames_1.default)((_b = {},
        _b[Modal_scss_1.default.overflow] = true,
        _b[Modal_scss_1.default.isOpen] = isOpen,
        _b));
    var modalClassNames = (0, classnames_1.default)((_c = {},
        _c[Modal_scss_1.default.modal] = true,
        _c[Modal_scss_1.default.isFullScreen] = isFullScreen,
        _c[Modal_scss_1.default.isMediaMode] = isMediaMode,
        _c));
    var iconExpandClassNames = (0, classnames_1.default)((_d = {},
        _d[Modal_scss_1.default.iconExpand] = true,
        _d[Modal_scss_1.default.isFullScreen] = isFullScreen,
        _d[Modal_scss_1.default.isMediaMode] = isMediaMode,
        _d[Modal_scss_1.default.isHidden] = !canFullScreen,
        _d));
    var iconCloseClassNames = (0, classnames_1.default)((_e = {},
        _e[Modal_scss_1.default.iconClose] = true,
        _e[Modal_scss_1.default.canClose] = canClose,
        _e[Modal_scss_1.default.isMediaMode] = isMediaMode,
        _e[Modal_scss_1.default.isFullScreen] = isFullScreen,
        _e));
    var iconCompressClassNames = (0, classnames_1.default)((_f = {},
        _f[Modal_scss_1.default.iconCompress] = true,
        _f[Modal_scss_1.default.isFullScreen] = isFullScreen,
        _f[Modal_scss_1.default.isMediaMode] = isMediaMode,
        _f));
    var iconCropClassNames = (0, classnames_1.default)((_g = {},
        _g[Modal_scss_1.default.iconCrop] = true,
        _g[Modal_scss_1.default.isFullScreen] = isFullScreen,
        _g[Modal_scss_1.default.isMediaMode] = isMediaMode,
        _g[Modal_scss_1.default.isHidden] = !canCrop,
        _g));
    var contentClassNames = (0, classnames_1.default)((_h = {},
        _h[Modal_scss_1.default.content] = true,
        _h[Modal_scss_1.default.isFullScreen] = isFullScreen,
        _h[Modal_scss_1.default.isMediaMode] = isMediaMode,
        _h[Modal_scss_1.default.isCrop] = isCrop,
        _h));
    return ((0, jsx_runtime_1.jsx)("div", { ref: overflowRef, className: overflowClassNames, onClick: overflowClickHandler, children: (0, jsx_runtime_1.jsx)("div", { ref: wrapperRef, className: modalClassNames, children: (0, jsx_runtime_1.jsxs)("div", { className: Modal_scss_1.default.wrapper, onClick: function (e) { return e.stopPropagation(); }, children: [(0, jsx_runtime_1.jsxs)("div", { className: "modalToolbar", children: [(0, jsx_runtime_1.jsx)("div", { ref: iconCloseRef, className: iconCloseClassNames, onClick: closeIconClickHandler, children: (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faTimes }) }), (0, jsx_runtime_1.jsx)("div", { ref: iconExpandRef, className: iconExpandClassNames, onClick: iconExpandClickHandler, children: (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faExpand }) }), (0, jsx_runtime_1.jsx)("div", { ref: iconCompressRef, className: iconCompressClassNames, onClick: iconCompressClickHandler, children: (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCompress }) }), (0, jsx_runtime_1.jsx)("div", { ref: iconCropRef, className: iconCropClassNames, onClick: iconCropClickHandler, children: (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCrop }) })] }), (0, jsx_runtime_1.jsx)("div", { className: contentClassNames, children: children })] }) }) }));
};
exports.Modal = Modal;
//# sourceMappingURL=Modal.js.map