import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from '../../store';
import { configActions } from '../../store/config';
import { useVibration } from '../../hooks/effects/vibration';
import { Action, Button } from '..';
import { Modal, Segments } from './components';
import { getWelcomeTourTextById, removeHighLight, setHighLight } from './utils';
import * as styles from './WelcomeTour.scss';
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
    var dispatch = useDispatch();
    var vibrationOn = useVibration().vibrationOn;
    var _b = useState(0), idIndex = _b[0], setIdIndex = _b[1];
    var _c = useState('Далее'), nextButtonLabel = _c[0], setNextButtonLabel = _c[1];
    useEffect(function () {
        if (!isActive) {
            removeHighLight();
            return;
        }
        setHighLight('action');
    }, [isActive]);
    var actionClickHandler = function () {
        vibrationOn(500);
        toast.success('Отлично!');
    };
    var nextButtonClickHandler = function () {
        removeHighLight();
        if (idIndex === elementsIdsArray.length - 2) {
            setNextButtonLabel('Закончить знакомство');
        }
        if (idIndex === elementsIdsArray.length - 1) {
            setIsActive(false);
            dispatch(configActions.setWelcomeTour(false));
            return;
        }
        var newIndex = idIndex + 1;
        var newId = elementsIdsArray[newIndex];
        setIdIndex(newIndex);
        setHighLight(newId);
    };
    var modalConfirmHandler = function () {
        setIsModalActive(false);
        setIsActive(true);
    };
    var elementId = elementsIdsArray[idIndex];
    var _d = getWelcomeTourTextById(elementId), header = _d.header, desc = _d.desc;
    return (_jsxs(_Fragment, { children: [_jsx(Modal, { isActive: isModalActive, onConfirm: modalConfirmHandler }), isActive && (_jsxs("div", { className: styles.Wrapper, children: [_jsxs("div", { className: styles.Card, children: [_jsx("p", { className: styles.CardHeader, children: header }), _jsx("p", { children: desc }), _jsx(Button, { type: "success", className: styles.CardButton, onClick: nextButtonClickHandler, children: nextButtonLabel })] }), _jsx("div", { "data-welcome-tour-id": "action", className: styles.ActionWrapper, children: _jsx(Action, { fullWidth: true, onClick: actionClickHandler, children: "\u0412\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442" }) }), _jsx(Segments, {})] }))] }));
};
//# sourceMappingURL=WelcomeTour.js.map