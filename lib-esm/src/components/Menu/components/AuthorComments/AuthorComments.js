import { jsx as _jsx } from "react/jsx-runtime";
import { useDispatch, useSelector } from 'store';
import { configActions, configSelectors } from 'store/config';
import { Toggle } from 'components/Toggle';
import { playAchievement } from 'components/Menu/utils';
export var AuthorComments = function () {
    var dispatch = useDispatch();
    var authorCommentsState = useSelector(configSelectors.authorComments);
    var toggleClickHandler = function (value) {
        dispatch(configActions.setAuthorComments(value));
        playAchievement();
    };
    return (_jsx(Toggle, { label: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438 \u0430\u0432\u0442\u043E\u0440\u0430", isActiveDefault: authorCommentsState, onClickOn: function () { return toggleClickHandler(true); }, onClickOff: function () { return toggleClickHandler(false); } }));
};
//# sourceMappingURL=AuthorComments.js.map