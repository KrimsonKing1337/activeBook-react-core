/// <reference types="react" />
import { type ReactReduxContextValue } from 'react-redux';
export declare const store: import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<{
    router: import("redux-first-history").RouterState;
    main: import("./main/@types").State;
    config: import("./config/@types").State;
    volume: import("./volume/@types").State;
    effects: import("./effects/common/@types").State;
    audioEffects: import("./effects/audio/audio/@types").State;
    audioBgEffects: import("./effects/audio/audioBg/@types").State;
    sideShadowEffect: import("./effects/side/shadow/@types").State;
    sideTextEffect: import("./effects/side/text/@types").State;
    backgroundEffects: import("./effects/background/@types").State;
    fontEffects: import("./effects/font/@types").State;
    bookmarks: import("./bookmarks/@types").State;
    achievements: import("./achievements/@types").State;
    counter: import("./counter/@types").State;
}, import("redux").AnyAction, import("redux").Middleware<{}, any, import("redux").Dispatch<import("redux").AnyAction>>[]>;
export declare const history: import("history").History & {
    listenObject: boolean;
};
export type RootState = ReturnType<typeof store.getState>;
export declare const storeContext: import("react").Context<ReactReduxContextValue<any, import("redux").AnyAction>>;
export declare const useStore: () => import("redux").Store<any, import("redux").AnyAction>;
export declare const useDispatch: () => import("redux").Dispatch<import("redux").AnyAction>;
export declare const useSelector: <Selected extends unknown>(selector: (state: any) => Selected, equalityFn?: ((previous: Selected, next: Selected) => boolean) | undefined) => Selected;
