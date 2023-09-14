import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useSelector } from 'store';
import { sideShadowEffectSelectors } from 'store/effects/side/shadow';
import { sideTextEffectSelectors } from 'store/effects/side/text';
import { SideShadow } from './components/SideShadow';
import styles from './SideEffects.scss';
export var SideEffects = function () {
    var sideShadowIsActive = useSelector(sideShadowEffectSelectors.isActive);
    var sideTextIsActive = useSelector(sideTextEffectSelectors.isActive);
    var sideShadowTemplate = useSelector(sideTextEffectSelectors.template);
    return (_jsxs("div", { className: styles.sideEffects, children: [sideShadowIsActive && _jsx(SideShadow, {}), sideTextIsActive && (_jsx(_Fragment, { children: sideShadowTemplate }))] }));
};
//# sourceMappingURL=SideEffects.js.map