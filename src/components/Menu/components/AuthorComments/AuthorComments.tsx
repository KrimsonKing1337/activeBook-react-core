import { useDispatch, useSelector } from 'store';
import { configActions, configSelectors } from 'store/config';

import { Toggle } from 'components/Toggle';

export const AuthorComments = () => {
  const dispatch = useDispatch();

  const authorCommentsState = useSelector(configSelectors.authorComments);

  const toggleClickHandler = (value: boolean) => {
    dispatch(configActions.setAuthorComments(value));
  };

  return (
    <Toggle
      label="Комментарии автора"
      isActiveDefault={authorCommentsState}
      onClickOn={() => toggleClickHandler(true)}
      onClickOff={() => toggleClickHandler(false)}
    />
  );
};
