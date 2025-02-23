import { useEffect } from 'react';
import { useDispatch } from 'store';
import { backgroundEffectsActions } from 'store/effects/background';
export var useBackground = function (_a) {
    var _b = _a.style, style = _b === void 0 ? {} : _b, _c = _a.images, images = _c === void 0 ? [] : _c, _d = _a.videos, videos = _d === void 0 ? [] : _d, _e = _a.Component, Component = _e === void 0 ? null : _e, _f = _a.shadow, shadow = _f === void 0 ? {} : _f;
    var dispatch = useDispatch();
    useEffect(function () {
        dispatch(backgroundEffectsActions.setStyle(style));
        dispatch(backgroundEffectsActions.setImages(images));
        dispatch(backgroundEffectsActions.setVideos(videos));
        dispatch(backgroundEffectsActions.setComponent(Component));
        dispatch(backgroundEffectsActions.setShadow(shadow));
        return function () {
            dispatch(backgroundEffectsActions.reset());
        };
    }, []);
};
//# sourceMappingURL=background.js.map