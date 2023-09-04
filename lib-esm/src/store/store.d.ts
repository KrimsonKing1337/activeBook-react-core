/// <reference types="react" />
import { type ReactReduxContextValue } from 'react-redux';
export declare const store: import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<{
    counter: import("./counter/@types").State;
}, import("redux").AnyAction, [import("@reduxjs/toolkit").ThunkMiddleware<{
    counter: import("./counter/@types").State;
}, import("redux").AnyAction>]>;
export type RootState = ReturnType<typeof store.getState>;
export declare const storeContext: import("react").Context<ReactReduxContextValue<any, import("redux").AnyAction>>;
export declare const useStore: () => import("redux").Store<any, import("redux").AnyAction>;
export declare const useDispatch: () => import("redux").Dispatch<import("redux").AnyAction>;
export declare const useSelector: <Selected extends unknown>(selector: (state: any) => Selected, equalityFn?: ((previous: Selected, next: Selected) => boolean) | undefined) => Selected;
