"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBackground = void 0;
var react_1 = require("react");
var store_1 = require("../../../store");
var background_1 = require("../../../store/effects/background");
var useBackground = function (_a) {
    var style = _a.style, img = _a.img, video = _a.video, shadow = _a.shadow, Component = _a.Component;
    var dispatch = (0, store_1.useDispatch)();
    (0, react_1.useEffect)(function () {
        dispatch(background_1.backgroundEffectActions.setStyle(style));
        dispatch(background_1.backgroundEffectActions.setImg(img));
        dispatch(background_1.backgroundEffectActions.setVideo(video));
        dispatch(background_1.backgroundEffectActions.setShadow(shadow));
        dispatch(background_1.backgroundEffectActions.setComponent(Component));
        return function () {
            dispatch(background_1.backgroundEffectActions.reset());
        };
    }, []);
};
exports.useBackground = useBackground;
//# sourceMappingURL=background.js.map