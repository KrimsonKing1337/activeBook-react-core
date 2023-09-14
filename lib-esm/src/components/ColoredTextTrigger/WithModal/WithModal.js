import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { Modal as ModalComponent } from 'components/Modal';
import { Action } from 'components/ColoredTextTrigger/Action';
import { AuthorComment } from 'components/ColoredTextTrigger/AuthorComment';
import { EasterEgg } from 'components/ColoredTextTrigger/EasterEgg';
import styles from './WithModal.scss';
export var WithModal = function (_a) {
    var children = _a.children, _b = _a.mode, mode = _b === void 0 ? 'media' : _b, text = _a.text, triggerType = _a.triggerType, eggId = _a.eggId;
    var _c = useState(false), isActive = _c[0], setIsActive = _c[1];
    var wrapperRef = useRef(null);
    var getTrigger = function () {
        if (triggerType === 'author') {
            return (_jsx(AuthorComment, { onClick: function () { return setIsActive(true); }, children: text }));
        }
        if (triggerType === 'egg') {
            if (!eggId) {
                console.error(new Error('Id for EasterEgg must be passed!'));
                return null;
            }
            return (_jsx(EasterEgg, { onClick: function () { return setIsActive(true); }, id: eggId, children: text }));
        }
        return (_jsx(Action, { onClick: function () { return setIsActive(true); }, children: text }));
    };
    useEffect(function () {
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
    return (_jsxs("div", { className: styles.wrapper, ref: wrapperRef, children: [_jsx(ModalComponent, { isOpen: isActive, onClose: function () { return setIsActive(false); }, mode: mode, canCrop: true, cropDefault: false, canFullScreen: true, children: children }), trigger] }));
};
//# sourceMappingURL=WithModal.js.map