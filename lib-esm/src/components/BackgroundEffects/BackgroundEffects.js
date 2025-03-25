import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment, memo, useMemo, useState, useEffect } from 'react';
import { useSelector } from 'store';
import { backgroundEffectsSelectors } from 'store/effects/background';
import { Videos, Images, Shadow, Dots, Wrapper } from './components';
import styles from './BackgroundEffects.scss';
var Child = memo(function (_a) {
    var children = _a.children;
    return (_jsx(Fragment, { children: children }));
});
export var BackgroundEffects = memo(function () {
    var _a = useState({}), effectsState = _a[0], setEffectsState = _a[1];
    var effects = useSelector(backgroundEffectsSelectors.effects);
    /*
     этот костыль (useEffect под этим комментарием) нужен для того, чтобы сымитировать nextTick();
     проблема была в том, что в хуке useBackground удаление эффекта происходило после
     рендера текущего компонента (BackgroundEffects).
  
     из-за чего подтягивались неактуальные (старые) effects и происходил их рендер,
     что вызывало в компоненте DotLottieReactWrapper задвоение исполнения useEffect,
     т.к. он дважды рендерился - один раз когда и должен был. а второй - при переходе на новую страницу,
     чтобы затем при изменении effects уничтожиться.
  
     и я таким образом как бы подвинул в очереди обновление effects для текущего компонента (BackgroundEffects).
     и теперь компонент получает актуальный список, как и должно.
  
     чтобы увидеть баг - достаточно в DotLottieReactWrapper в useEffect выводить что-нибудь в консоль,
     затем использовать useBackground и передать туда в качестве Component: <DotLottieReactWrapper />.
     далее зайти на страницу и пройти на следующую - в консоли выведется дважды то, что происходит в useEffect.
  
     самый быстрый способ увидеть - в первой детской сказке сделать переход с первой страницы на вторую,
     убрав useEffect ниже.
    */
    useEffect(function () {
        setEffectsState(effects);
    }, [effects]);
    var BackgroundObjectsWrappers = useMemo(function () {
        return Object.keys(effectsState).map(function (keyCur) {
            var effectCur = effects[keyCur];
            var id = effectCur.id, _a = effectCur.videos, videos = _a === void 0 ? [] : _a, _b = effectCur.images, images = _b === void 0 ? [] : _b, _c = effectCur.Component, Component = _c === void 0 ? null : _c, _d = effectCur.shadow, shadow = _d === void 0 ? {} : _d, _e = effectCur.style, style = _e === void 0 ? {} : _e;
            var oneOfBgIsActive = !!videos.length || !!images.length || !!Component;
            return oneOfBgIsActive && (_jsx(Child, { children: _jsxs("div", { style: style, className: styles.backgroundObjectsWrapper, children: [_jsx(Shadow, { options: shadow }), Component, _jsx(Videos, { videos: videos }), _jsx(Images, { images: images })] }) }, id));
        });
    }, [effectsState]);
    return (_jsxs(Wrapper, { id: "background-effects", children: [_jsx(Dots, {}), BackgroundObjectsWrappers.map(function (cur) { return cur; })] }));
});
//# sourceMappingURL=BackgroundEffects.js.map