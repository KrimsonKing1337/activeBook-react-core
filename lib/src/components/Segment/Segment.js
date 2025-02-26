"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Segment = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var classnames_1 = __importDefault(require("classnames"));
var nanoid_1 = require("nanoid");
var store_1 = require("../../store");
var segments_1 = require("../../store/segments");
var Segment_scss_1 = __importDefault(require("./Segment.scss"));
var Segment = function (_a) {
    var _b;
    var children = _a.children, defaultId = _a.id, _c = _a.isActive, isActiveDefault = _c === void 0 ? false : _c, _d = _a.onActive, onActive = _d === void 0 ? function () { } : _d, _e = _a.onExit, onExit = _e === void 0 ? function () { } : _e;
    var dispatch = (0, store_1.useDispatch)();
    var _f = (0, react_1.useState)(''), id = _f[0], setId = _f[1];
    var segments = (0, store_1.useSelector)(segments_1.segmentsSelectors.segments);
    var activeId = (0, store_1.useSelector)(segments_1.segmentsSelectors.activeId);
    var lastActiveId = (0, store_1.useSelector)(segments_1.segmentsSelectors.lastActiveId);
    var segmentsLength = Object.keys(segments).length;
    (0, react_1.useEffect)(function () {
        if (activeId === id) {
            onActive();
        }
        if (lastActiveId && lastActiveId === id) {
            onExit();
        }
    }, [id, activeId, lastActiveId]);
    (0, react_1.useEffect)(function () {
        var uuid = defaultId ? defaultId : (0, nanoid_1.nanoid)();
        setId(uuid);
        dispatch(segments_1.segmentsActions.incrementSegmentsCount());
    }, []);
    (0, react_1.useEffect)(function () {
        if (!id || segments[id] !== undefined) {
            return;
        }
        dispatch(segments_1.segmentsActions.setSegment({
            id: id,
            isActive: isActiveDefault,
        }));
    }, [id, segmentsLength]);
    (0, react_1.useEffect)(function () {
        return function () {
            dispatch(segments_1.segmentsActions.reset());
        };
    }, []);
    if (segmentsLength === 0) {
        return null;
    }
    var segmentClickHandler = function () {
        dispatch(segments_1.segmentsActions.setSegment({
            id: id,
            isActive: true,
        }));
    };
    var buttonClickHandler = function () {
        var nextId = id + 1;
        dispatch(segments_1.segmentsActions.setSegment({
            id: nextId,
            isActive: true,
        }));
    };
    var isActive = segments[id];
    // отображаем кнопку, если сегмент не последний и активный
    var withButton = false;
    var segmentClassNames = (0, classnames_1.default)((_b = {},
        _b[Segment_scss_1.default.segment] = true,
        _b[Segment_scss_1.default.isActive] = isActive,
        _b[Segment_scss_1.default.withButton] = withButton,
        _b));
    return ((0, jsx_runtime_1.jsxs)("div", { className: segmentClassNames, onClick: segmentClickHandler, children: [children, withButton && ((0, jsx_runtime_1.jsx)("div", { className: Segment_scss_1.default.segmentButton, onClick: buttonClickHandler, children: (0, jsx_runtime_1.jsx)("div", { className: Segment_scss_1.default.segmentButtonIconWrapper, children: (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faArrowDown }) }) }))] }));
};
exports.Segment = Segment;
//# sourceMappingURL=Segment.js.map