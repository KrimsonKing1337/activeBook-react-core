import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { useGoToPage } from 'hooks/control/useGoToPage';

import * as styles from './Item.scss';

export type ItemProps = {
  pageNumber: number;
  onDelete: (bookmark: number) => void;
};

export const Item = ({ pageNumber, onDelete }: ItemProps) => {
  const { goToPage } = useGoToPage();

  const clickHandler = () => {
    goToPage(pageNumber);
  };

  const deleteIconClickHandler = (e: React.MouseEvent) => {
    e.stopPropagation();

    onDelete(pageNumber);
  };

  return (
    <div className={styles.Item} onClick={clickHandler}>
      <div className={styles.PageNumber}>
        Страница {pageNumber}
      </div>

      <div className={styles.DeleteIcon} onClick={deleteIconClickHandler}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
    </div>
  );
};
