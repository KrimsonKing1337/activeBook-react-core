import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Action, Button, ModalDialog, Segment } from 'components';
import { useVibration } from 'hooks/effects/vibration';
import { localStorageId, getWelcomeTourTextById, removeHighLight, setHighLight } from './utils';
import styles from './WelcomeTour.scss';
var elementsIdsArray = [
    'action',
    'segments',
    'bookmarks',
    'navigation',
    'font',
    'config',
];
export var WelcomeTour = function (_a) {
    var isActive = _a.isActive, setIsActive = _a.setIsActive, isModalActive = _a.isModalActive, setIsModalActive = _a.setIsModalActive;
    var _b = useVibration(), vibrationOn = _b.vibrationOn, vibrationOff = _b.vibrationOff;
    var _c = useState(0), idIndex = _c[0], setIdIndex = _c[1];
    var _d = useState('Далее'), nextButtonLabel = _d[0], setNextButtonLabel = _d[1];
    useEffect(function () {
        if (!isActive) {
            removeHighLight();
            return;
        }
        setHighLight('action');
    }, [isActive]);
    var actionClickHandler = function () {
        vibrationOn(1000);
        toast.success('Отлично!');
    };
    var segment1EnterHandler = function () {
        vibrationOn(1000);
        toast.success('Так держать!');
    };
    var segment2EnterHandler = function () {
        vibrationOn(1000);
        toast.success('Супер!');
    };
    var segmentExitHandler = function () {
        vibrationOff();
    };
    var nextButtonClickHandler = function () {
        removeHighLight();
        if (idIndex === elementsIdsArray.length - 2) {
            setNextButtonLabel('Закончить знакомство');
        }
        if (idIndex === elementsIdsArray.length - 1) {
            setIsActive(false);
            localStorage.setItem(localStorageId, 'true');
            return;
        }
        var newIndex = idIndex + 1;
        var newId = elementsIdsArray[newIndex];
        setIdIndex(newIndex);
        setHighLight(newId);
    };
    var modalCloseHandler = function () {
        setIsModalActive(false);
        setIsActive(true);
    };
    var elementId = elementsIdsArray[idIndex];
    var _e = getWelcomeTourTextById(elementId), header = _e.header, desc = _e.desc;
    return (_jsxs(_Fragment, { children: [_jsx(ModalDialog, { isOpen: isModalActive, confirmButtonLabel: "\u0425\u043E\u0440\u043E\u0448\u043E", canFullScreen: false, showCancelButton: false, cantCloseIn: 2000, onConfirm: modalCloseHandler, children: _jsxs("div", { children: [_jsx("header", { children: "\u041F\u0435\u0440\u0435\u0434 \u0442\u0435\u043C \u043A\u0430\u043A \u043D\u0430\u0447\u043D\u0451\u043C..." }), _jsx("article", { children: _jsx("p", { children: "\u041F\u043E\u0437\u043D\u0430\u043A\u043E\u043C\u044C\u0442\u0435\u0441\u044C \u0441 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044F\u043C\u0438 \u043A\u043D\u0438\u0433\u0438" }) })] }) }), isActive && (_jsxs("div", { className: styles.Wrapper, children: [_jsxs("div", { className: styles.Card, children: [_jsx("p", { className: styles.CardHeader, children: header }), _jsx("p", { children: desc }), _jsx(Button, { type: "success", className: styles.CardButton, onClick: nextButtonClickHandler, children: nextButtonLabel })] }), _jsx("div", { "data-welcome-tour-id": "action", className: styles.ActionWrapper, children: _jsx(Action, { fullWidth: true, onClick: actionClickHandler, children: "\u0412\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442" }) }), _jsxs("div", { "data-welcome-tour-id": "segments", children: [_jsx(Segment, { onEnter: segment1EnterHandler, onExit: segmentExitHandler, children: _jsx("p", { children: "\u041D\u0430\u0436\u043C\u0438 \u043D\u0430 \u043C\u0435\u043D\u044F" }) }), _jsx(Segment, { onEnter: segment2EnterHandler, onExit: segmentExitHandler, children: _jsx("p", { children: "\u0418 \u043D\u0430 \u043C\u0435\u043D\u044F \u043D\u0430\u0436\u043C\u0438!" }) })] })] }))] }));
};
//# sourceMappingURL=WelcomeTour.js.map