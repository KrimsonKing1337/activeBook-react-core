"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackgroundEffects = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var store_1 = require("../../store");
var background_1 = require("../../store/effects/background");
var components_1 = require("./components");
var BackgroundEffects_scss_1 = __importDefault(require("./BackgroundEffects.scss"));
var Child = (0, react_1.memo)(function (_a) {
    var children = _a.children;
    return ((0, jsx_runtime_1.jsx)(react_1.Fragment, { children: children }));
});
exports.BackgroundEffects = (0, react_1.memo)(function () {
    var _a = (0, react_1.useState)({}), effectsState = _a[0], setEffectsState = _a[1];
    var effects = (0, store_1.useSelector)(background_1.backgroundEffectsSelectors.effects);
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
    (0, react_1.useEffect)(function () {
        setEffectsState(effects);
    }, [effects]);
    var BackgroundObjectsWrappers = (0, react_1.useMemo)(function () {
        return Object.keys(effectsState).map(function (keyCur) {
            var effectCur = effects[keyCur];
            var id = effectCur.id, _a = effectCur.videos, videos = _a === void 0 ? [] : _a, _b = effectCur.images, images = _b === void 0 ? [] : _b, _c = effectCur.Component, Component = _c === void 0 ? null : _c, _d = effectCur.shadow, shadow = _d === void 0 ? {} : _d, _e = effectCur.style, style = _e === void 0 ? {} : _e;
            var oneOfBgIsActive = !!videos.length || !!images.length || !!Component;
            return oneOfBgIsActive && ((0, jsx_runtime_1.jsx)(Child, { children: (0, jsx_runtime_1.jsxs)("div", { style: style, className: BackgroundEffects_scss_1.default.backgroundObjectsWrapper, children: [(0, jsx_runtime_1.jsx)(components_1.Shadow, { options: shadow }), Component, (0, jsx_runtime_1.jsx)(components_1.Videos, { videos: videos }), (0, jsx_runtime_1.jsx)(components_1.Images, { images: images })] }) }, id));
        });
    }, [effectsState]);
    return ((0, jsx_runtime_1.jsxs)(components_1.Wrapper, { id: "background-effects", children: [(0, jsx_runtime_1.jsx)(components_1.Dots, {}), BackgroundObjectsWrappers.map(function (cur) { return cur; })] }));
});
//# sourceMappingURL=BackgroundEffects.js.map