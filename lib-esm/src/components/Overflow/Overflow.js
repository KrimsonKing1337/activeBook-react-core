import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { useDispatch } from 'store';
import { mainActions } from 'store/main';
import { getNarrativeElement } from 'components/PageWrapper/components/Narrative/utils';
import styles from './Overflow.scss';
export var Overflow = function (_a) {
    var _b;
    var children = _a.children, isOpen = _a.isOpen;
    var dispatch = useDispatch();
    var overflowRef = useRef(null);
    // закрываем по Esc активный Overflow в данный момент
    useEffect(function () {
        var keypressEscHandler = function (e) {
            var key = e.key;
            if (key === 'Escape') {
                dispatch(mainActions.setMenuActiveState(null));
            }
        };
        if (isOpen) {
            document.addEventListener('keydown', keypressEscHandler);
        }
        return function () {
            document.removeEventListener('keydown', keypressEscHandler);
        };
    }, [isOpen]);
    useEffect(function () {
        var _a;
        if (isOpen) {
            // переводим фокус на прокручиваемый элемент для возможности прокрутки с помощью стрелок вверх и вниз
            (_a = overflowRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
        else {
            // возвращаем фокус на текст
            var narrativeElement = getNarrativeElement();
            narrativeElement === null || narrativeElement === void 0 ? void 0 : narrativeElement.focus();
        }
    }, [isOpen]);
    var overflowClassNames = classNames((_b = {},
        _b[styles.overflow] = true,
        _b[styles.isOpen] = isOpen,
        _b));
    return (_jsx("div", { ref: overflowRef, className: overflowClassNames, tabIndex: 0, children: children }));
};
//# sourceMappingURL=Overflow.js.map