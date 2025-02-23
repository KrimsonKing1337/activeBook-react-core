"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBackground = void 0;
var react_1 = require("react");
var store_1 = require("../../../store");
var background_1 = require("../../../store/effects/background");
var useBackground = function (_a) {
    var _b = _a.style, style = _b === void 0 ? {} : _b, _c = _a.images, images = _c === void 0 ? [] : _c, _d = _a.videos, videos = _d === void 0 ? [] : _d, _e = _a.Component, Component = _e === void 0 ? null : _e, _f = _a.shadow, shadow = _f === void 0 ? {} : _f;
    var dispatch = (0, store_1.useDispatch)();
    (0, react_1.useEffect)(function () {
        dispatch(background_1.backgroundEffectsActions.setStyle(style));
        dispatch(background_1.backgroundEffectsActions.setImages(images));
        dispatch(background_1.backgroundEffectsActions.setVideos(videos));
        dispatch(background_1.backgroundEffectsActions.setComponent(Component));
        dispatch(background_1.backgroundEffectsActions.setShadow(shadow));
        return function () {
            dispatch(background_1.backgroundEffectsActions.reset());
        };
    }, []);
};
exports.useBackground = useBackground;
//# sourceMappingURL=background.js.map