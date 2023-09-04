import { jsx as _jsx } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { store, storeContext } from './store';
export var StoreProvider = function (_a) {
    var children = _a.children;
    return (_jsx(Provider, { context: storeContext, store: store, children: children }));
};
//# sourceMappingURL=Provider.js.map