import { Toggle } from 'components/Toggle';
import { playAchievement } from 'components/Menu/utils';

import { useDispatch, useSelector } from 'store';
import { configActions, configSelectors } from 'store/config';


export const AuthorComments = () => {
  const dispatch = useDispatch();

  const authorCommentsState = useSelector(configSelectors.authorComments);

  const toggleClickHandler = (value: boolean) => {
    dispatch(configActions.setAuthorComments(value));

    playAchievement();
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
