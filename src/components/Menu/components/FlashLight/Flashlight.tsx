import { useEffect } from 'react';

import { Toggle } from 'components/Toggle';
import { playAchievement } from 'components/Menu/utils';
import { Spoiler } from 'components/Spoiler';

import { useDispatch, useSelector } from 'store';
import { configActions } from 'store/config';
import { mainSelectors } from 'store/main';

import { useFlashlight } from 'hooks/effects/flashlight';

import { flashlightInst } from 'utils/effects/flashlight';

import styles from './Flashlight.scss';

export const Flashlight = () => {
  const dispatch = useDispatch();

  const { flashlightOn } = useFlashlight();

  const isFlashlightAvailable = useSelector(mainSelectors.isFlashlightAvailable);
  const flashlightProblems = useSelector(mainSelectors.flashlightProblems);

  useEffect(() => {
    if (!isFlashlightAvailable) {
      return;
    }

    const listener = () => {
      flashlightInst.off();
    };

    document.addEventListener('resume', listener, { once: true });

    return () => {
      document.removeEventListener('resume', listener);
    };
  }, []);

  const toggleClickHandler = async (value: boolean) => {
    dispatch(configActions.setFlashlight(value));

    playAchievement();

    if (!value) {
      return;
    }

    flashlightOn(100);
  };

  return (
    <div className={styles.flashlight}>
      <Toggle
        label="Вспышка (там, где доступно)"
        isActiveDefault={false}
        onClickOn={() => toggleClickHandler(true)}
        onClickOff={() => toggleClickHandler(false)}
      />

      <Spoiler label="Не работает вспышка?">
        Проверьте, что дано разрешение для использования камеры.
        <br />
        (адресная строка браузера {'->'} замочек {'->'} разрешения)
        <br />
        Но иногда бывает, что даже если разрешения все есть, браузер не может достучаться до вспышки.
        Ниже будет выводится, чего он не смог найти:
        <br />
        <br />
        {flashlightProblems}
      </Spoiler>
    </div>
  );
};
