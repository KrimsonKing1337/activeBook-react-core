import { useEffect, useRef, useState } from 'react';

import classNames from 'classnames';
import { Item } from 'components/Toolbar/components/Item';

import { useSelector } from 'store';
import { mainSelectors } from 'store/main';
import ArrowLeft from 'assets/img/toolbar/i-arrow-left.svg';
import ArrowRight from 'assets/img/toolbar/i-arrow-right.svg';
import { goNextPage, goPrevPage, goToPage } from 'utils/control/goToPage';

import styles from './Nav.scss';

export const Nav = () => {
  const page = useSelector(mainSelectors.page);
  const pages = useSelector(mainSelectors.pages);

  const inputRef = useRef<HTMLInputElement>(null);
  const [goToWithInputIsHide, setGoToWithInputIsHide] = useState(true);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    inputRef.current?.focus();
  });

  useEffect(() => {
    const keypressHandler = (e: KeyboardEvent) => {
      const { key } = e;

      if (key !== 'Enter' || goToWithInputIsHide) {
        return;
      }

      go();
    };

    document.addEventListener('keypress', keypressHandler);

    return () => {
      document.removeEventListener('keypress', keypressHandler);
    };
  }, [goToWithInputIsHide, inputValue]);

  const prevClickHandler = () => {
    goPrevPage();
  };

  const nextClickHandler = () => {
    goNextPage();
  };

  const pageNumberClickHandler = () => {
    setGoToWithInputIsHide(false);
  };

  const go = () => {
    let pageNumber = parseInt(inputValue);

    if (isNaN(pageNumber) || page === pageNumber) {
      return;
    }

    if (pageNumber > pages) {
      pageNumber = pages;
    }

    setGoToWithInputIsHide(true);

    goToPage(pageNumber);
  };

  const buttonClickHandler = () => {
    go();
  };

  const inputBlurHandler = () => {
    setGoToWithInputIsHide(true);
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const goToWithArrowsClassNames = classNames({
    [styles.goToWithArrows]: true,
    [styles.isHide]: !goToWithInputIsHide,
  });

  const goToWithInputClassNames = classNames({
    [styles.goToWithInput]: true,
    [styles.isHide]: goToWithInputIsHide,
  });

  /**
   * из-за того, что используется хак для тачей в виде addTouchSupportForCssHover(),
   * придётся отказаться от логики if/else и переключать видимость элементов по-старинке через css-классы.
   * конструкция вида ```isHide && (<div></div>)``` удаляет элемент физически из DOM-а.
   * и функция addTouchSupportForCssHover не может при инициализации приложения накинуть соответствующие обработчики.
   *
   * есть второй путь: при ре-рендере каждый раз запускать addTouchSupportForCssHover(),
   * но мне кажется, что это будет слишком "дорого" и неудобно.
   * возможно, вернусь к этому позже
   * */
  return (
    <>
      <div className={goToWithArrowsClassNames}>
        <Item onClick={prevClickHandler}>
          <ArrowLeft />
        </Item>

        <div className={styles.pageNumber} onClick={pageNumberClickHandler}>
          {page} из {pages}
        </div>

        <Item onClick={nextClickHandler}>
          <ArrowRight />
        </Item>
      </div>

      <div className={goToWithInputClassNames}>
        <div className={styles.wrapperInput}>
          <input
            ref={inputRef}
            onChange={inputChangeHandler}
            onBlur={inputBlurHandler}
            className={styles.input}
            type="number"
            min="0"
            inputMode="numeric"
            value={inputValue}
            pattern="[0-9]"
            placeholder={page.toString()}
          />
        </div>

        {/* onClick отрабатывает позже onBlur у input-а выше, поэтому используется onMouseDown */}
        <button className={styles.button} onMouseDown={buttonClickHandler}>
          Перейти
        </button>
      </div>
    </>
  );
};
