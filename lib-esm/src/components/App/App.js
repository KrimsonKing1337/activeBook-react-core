import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from 'react';
import { HistoryRouter } from 'redux-first-history/rr6';
import { AppWrapper } from 'components/AppWrapper';
import { history, StoreProvider } from 'store';
import { hideAddressBarInMobileDevices } from 'utils/mobile/hideAddressBarInMobileDevices';
import { addKeyboardControl } from 'utils/control/keyboardControl';
import { Routes } from './Routes';
export var App = function (_a) {
    var rangeEffects = _a.rangeEffects, children = _a.children;
    useEffect(function () {
        // addTouchSupportForCssHover(); // вместо этого просто "удаляю" :hover везде, возможно так и оставлю
        addKeyboardControl();
        hideAddressBarInMobileDevices();
    }, []);
    return (_jsx(StoreProvider, { children: _jsx(HistoryRouter, { history: history, children: _jsx(AppWrapper, { rangeEffects: rangeEffects, children: _jsx(Routes, { children: children }) }) }) }));
};
//# sourceMappingURL=App.js.map