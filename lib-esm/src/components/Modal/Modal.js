import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import Hammer from 'hammerjs';
import { nanoid } from 'nanoid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompress, faCrop, faExpand, faTimes } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import styles from './Modal.scss';
/*
* ниже я реализовал механику на window.location и window.history,
* потому что при использовании хуков из react-router - location неактуальный,
* из-за чего модалка открывается и сразу же закрывается.
* мб дело в redux-first-history, что все действия с location нужно производить через стор и саги.
*/
export var Modal = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h;
    var children = _a.children, onClose = _a.onClose, isOpen = _a.isOpen, _j = _a.mode, mode = _j === void 0 ? 'text' : _j, _k = _a.canClose, canClose = _k === void 0 ? true : _k, _l = _a.canFullScreen, canFullScreen = _l === void 0 ? false : _l, _m = _a.fullScreenDefault, fullScreenDefault = _m === void 0 ? false : _m, _o = _a.canCrop, canCrop = _o === void 0 ? false : _o, _p = _a.cropDefault, cropDefault = _p === void 0 ? true : _p;
    // здесь реф-версии нужны для хаммера, обычные для того чтобы ре-рендер срабатывал
    var isFullScreenRef = useRef(false);
    var isCropRef = useRef(true);
    var isZoomingRef = useRef(false);
    var _q = useState(fullScreenDefault), isFullScreen = _q[0], setIsFullScreen = _q[1];
    var _r = useState(cropDefault), isCrop = _r[0], setIsCrop = _r[1];
    var _s = useState(''), componentUuid = _s[0], setComponentUuid = _s[1];
    var overflowRef = useRef(null);
    var wrapperRef = useRef(null);
    var iconCloseRef = useRef(null);
    var iconExpandRef = useRef(null);
    var iconCompressRef = useRef(null);
    var iconCropRef = useRef(null);
    useEffect(function () {
        var uuidValue = nanoid();
        setComponentUuid(uuidValue);
    }, []);
    var escPressHandler = function (e) {
        if (e.key === 'Escape') {
            close();
        }
    };
    useEffect(function () {
        window.addEventListener('popstate', function () {
            if (!window.location.hash) {
                close();
            }
        });
    }, []);
    useEffect(function () {
        if (!isOpen) {
            document.removeEventListener('keydown', escPressHandler);
            return;
        }
        var path = "#/modal/".concat(componentUuid);
        window.history.pushState('', '', path);
        document.addEventListener('keydown', escPressHandler);
    }, [isOpen]);
    useEffect(function () {
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
    useEffect(function () {
        if (!overflowRef.current) {
            return;
        }
        var hammertime = new Hammer(overflowRef.current);
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
    var overflowClassNames = classNames((_b = {},
        _b[styles.overflow] = true,
        _b[styles.isOpen] = isOpen,
        _b));
    var modalClassNames = classNames((_c = {},
        _c[styles.modal] = true,
        _c[styles.isFullScreen] = isFullScreen,
        _c[styles.isMediaMode] = isMediaMode,
        _c));
    var iconExpandClassNames = classNames((_d = {},
        _d[styles.iconExpand] = true,
        _d[styles.isFullScreen] = isFullScreen,
        _d[styles.isMediaMode] = isMediaMode,
        _d[styles.isHidden] = !canFullScreen,
        _d));
    var iconCloseClassNames = classNames((_e = {},
        _e[styles.iconClose] = true,
        _e[styles.canClose] = canClose,
        _e[styles.isMediaMode] = isMediaMode,
        _e[styles.isFullScreen] = isFullScreen,
        _e));
    var iconCompressClassNames = classNames((_f = {},
        _f[styles.iconCompress] = true,
        _f[styles.isFullScreen] = isFullScreen,
        _f[styles.isMediaMode] = isMediaMode,
        _f));
    var iconCropClassNames = classNames((_g = {},
        _g[styles.iconCrop] = true,
        _g[styles.isFullScreen] = isFullScreen,
        _g[styles.isMediaMode] = isMediaMode,
        _g[styles.isHidden] = !canCrop,
        _g));
    var contentClassNames = classNames((_h = {},
        _h[styles.content] = true,
        _h[styles.isFullScreen] = isFullScreen,
        _h[styles.isMediaMode] = isMediaMode,
        _h[styles.isCrop] = isCrop,
        _h));
    return (_jsx("div", { ref: overflowRef, className: overflowClassNames, onClick: overflowClickHandler, children: _jsx("div", { ref: wrapperRef, className: modalClassNames, children: _jsxs("div", { className: styles.wrapper, onClick: function (e) { return e.stopPropagation(); }, children: [_jsxs("div", { className: "modalToolbar", children: [_jsx("div", { ref: iconCloseRef, className: iconCloseClassNames, onClick: closeIconClickHandler, children: _jsx(FontAwesomeIcon, { icon: faTimes }) }), _jsx("div", { ref: iconExpandRef, className: iconExpandClassNames, onClick: iconExpandClickHandler, children: _jsx(FontAwesomeIcon, { icon: faExpand }) }), _jsx("div", { ref: iconCompressRef, className: iconCompressClassNames, onClick: iconCompressClickHandler, children: _jsx(FontAwesomeIcon, { icon: faCompress }) }), _jsx("div", { ref: iconCropRef, className: iconCropClassNames, onClick: iconCropClickHandler, children: _jsx(FontAwesomeIcon, { icon: faCrop }) })] }), _jsx("div", { className: contentClassNames, children: children })] }) }) }));
};
//# sourceMappingURL=Modal.js.map