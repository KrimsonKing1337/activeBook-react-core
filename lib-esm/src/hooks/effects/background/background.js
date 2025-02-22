import { useEffect } from 'react';
import { useDispatch } from 'store';
import { backgroundEffectActions } from 'store/effects/background';
export var useBackground = function (_a) {
    var style = _a.style, img = _a.img, video = _a.video, shadow = _a.shadow, Component = _a.Component;
    var dispatch = useDispatch();
    useEffect(function () {
        dispatch(backgroundEffectActions.setStyle(style));
        dispatch(backgroundEffectActions.setImg(img));
        dispatch(backgroundEffectActions.setVideo(video));
        dispatch(backgroundEffectActions.setShadow(shadow));
        dispatch(backgroundEffectActions.setComponent(Component));
        return function () {
            dispatch(backgroundEffectActions.reset());
        };
    }, []);
};
//# sourceMappingURL=background.js.map