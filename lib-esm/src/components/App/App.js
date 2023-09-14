import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { HistoryRouter } from 'redux-first-history/rr6';
import { history, StoreProvider } from 'store';
import { Counter } from 'components';
import { AppWrapper } from 'components/AppWrapper';
import { hideAddressBarInMobileDevices } from 'utils/mobile/hideAddressBarInMobileDevices';
import { addKeyboardControl } from 'utils/control/keyboardControl';
import { Routes } from './Routes';
export var App = function (_a) {
    var effectsJson = _a.effectsJson, children = _a.children;
    useEffect(function () {
        // addTouchSupportForCssHover(); // вместо этого просто "удаляю" :hover везде, возможно так и оставлю
        addKeyboardControl();
        hideAddressBarInMobileDevices();
    }, []);
    return (_jsx(StoreProvider, { children: _jsx(HistoryRouter, { history: history, children: _jsxs(AppWrapper, { effectsJson: effectsJson, children: [_jsx(Counter, {}), _jsx(Routes, { children: children })] }) }) }));
};
//# sourceMappingURL=App.js.map