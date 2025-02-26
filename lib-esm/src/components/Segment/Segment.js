import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'store';
import { segmentsActions, segmentsSelectors } from 'store/segments';
import styles from './Segment.scss';
export var Segment = function (_a) {
    var _b;
    var children = _a.children, defaultId = _a.id, _c = _a.isActive, isActiveDefault = _c === void 0 ? false : _c, _d = _a.onEnter, onEnter = _d === void 0 ? function () { } : _d, _e = _a.onExit, onExit = _e === void 0 ? function () { } : _e;
    var dispatch = useDispatch();
    var _f = useState(''), id = _f[0], setId = _f[1];
    var segments = useSelector(segmentsSelectors.segments);
    var activeId = useSelector(segmentsSelectors.activeId);
    var lastActiveId = useSelector(segmentsSelectors.lastActiveId);
    var segmentsLength = Object.keys(segments).length;
    useEffect(function () {
        if (activeId === id) {
            onEnter();
        }
        if (lastActiveId && lastActiveId === id) {
            onExit();
        }
    }, [id, activeId, lastActiveId]);
    useEffect(function () {
        var uuid = defaultId ? defaultId : nanoid();
        setId(uuid);
        dispatch(segmentsActions.incrementSegmentsCount());
    }, []);
    useEffect(function () {
        if (!id || segments[id] !== undefined) {
            return;
        }
        dispatch(segmentsActions.setSegment({
            id: id,
            isActive: isActiveDefault,
        }));
    }, [id, segmentsLength]);
    useEffect(function () {
        return function () {
            dispatch(segmentsActions.reset());
        };
    }, []);
    if (segmentsLength === 0) {
        return null;
    }
    var segmentClickHandler = function () {
        dispatch(segmentsActions.setSegment({
            id: id,
            isActive: true,
        }));
    };
    var buttonClickHandler = function () {
        var nextId = id + 1;
        dispatch(segmentsActions.setSegment({
            id: nextId,
            isActive: true,
        }));
    };
    var isActive = segments[id];
    // отображаем кнопку, если сегмент не последний и активный
    var withButton = false;
    var segmentClassNames = classNames((_b = {},
        _b[styles.segment] = true,
        _b[styles.isActive] = isActive,
        _b[styles.withButton] = withButton,
        _b));
    return (_jsxs("div", { className: segmentClassNames, onClick: segmentClickHandler, children: [children, withButton && (_jsx("div", { className: styles.segmentButton, onClick: buttonClickHandler, children: _jsx("div", { className: styles.segmentButtonIconWrapper, children: _jsx(FontAwesomeIcon, { icon: faArrowDown }) }) }))] }));
};
//# sourceMappingURL=Segment.js.map