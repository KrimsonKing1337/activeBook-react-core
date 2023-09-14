import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import styles from './SideText.scss';
export var SideText = function (_a) {
    var children = _a.children;
    var childrenAsArray = React.Children.toArray(children);
    if (childrenAsArray.length !== 2) {
        throw new Error('There are must be two children in props!');
    }
    return (_jsxs("div", { className: styles.sideTextScrollWrapper, children: [_jsx("div", { className: styles.sideTextScrollLeftWrapper, children: _jsx("div", { className: styles.sideTextScrollLeft, children: _jsx("div", { className: styles.sideTextScrollContent, children: childrenAsArray[0] }) }) }), _jsx("div", { className: styles.sideTextScrollRightWrapper, children: _jsx("div", { className: styles.sideTextScrollRight, children: _jsx("div", { className: styles.sideTextScrollContent, children: childrenAsArray[1] }) }) })] }));
};
//# sourceMappingURL=SideText.js.map