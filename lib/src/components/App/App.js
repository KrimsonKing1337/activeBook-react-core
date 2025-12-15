import { jsx as _jsx } from "react/jsx-runtime";
import { MemoryRouter } from 'react-router-dom';
import { StoreProvider } from '../../store';
import { AppWrapper } from '../AppWrapper';
import { Routes } from './Routes';
export var App = function (_a) {
    var children = _a.children, config = _a.config, tableOfContents = _a.tableOfContents, rangeEffects = _a.rangeEffects;
    return (_jsx(StoreProvider, { children: _jsx(MemoryRouter, { children: _jsx(AppWrapper, { config: config, tableOfContents: tableOfContents, rangeEffects: rangeEffects, children: _jsx(Routes, { children: children }) }) }) }));
};
//# sourceMappingURL=App.js.map