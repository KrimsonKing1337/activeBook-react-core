import { Label } from 'components/Label';

import { useDispatch, useSelector } from 'store';
import { volumeActions, volumeSelectors } from 'store/volume';


import { Slider } from './components/Slider';
import { playAchievement } from './utils';
import styles from './Volume.scss';

export const Volume = () => {
  const dispatch = useDispatch();

  const globalVolume = useSelector(volumeSelectors.global);
  const bgVolume = useSelector(volumeSelectors.bg);
  const sfxVolume = useSelector(volumeSelectors.sfx);
  const musicVolume = useSelector(volumeSelectors.music);

  // todo: мб слишком часто запись в local storage происходит. мб на onAfterChange переделать

  const afterChangeHandler = () => {
    playAchievement();
  };

  const globalChangeHandler = (value: number) => {
    dispatch(volumeActions.setGlobal(value));
  };

  const bgChangeHandler = (value: number) => {
    dispatch(volumeActions.setBg(value));
  };

  const sfxChangeHandler = (value: number) => {
    dispatch(volumeActions.setSfx(value));
  };

  const musicChangeHandler = (value: number) => {
    dispatch(volumeActions.setMusic(value));
  };

  /*
  * пытался то, что ниже переделать в массив и map(),
  * но получаю ошибку: Can't perform a React state update on an unmounted component
  */
  return (
    <div className={styles.volume}>
      <div className={styles.item}>
        <Label label="Общая громкость" />

        <Slider value={globalVolume} onChange={globalChangeHandler} onAfterChange={afterChangeHandler} />
      </div>

      <div className={styles.item}>
        <Label label="Громкость музыки" />

        <Slider value={musicVolume} onChange={musicChangeHandler} onAfterChange={afterChangeHandler} />
      </div>

      <div className={styles.item}>
        <Label label="SFX" />

        <Slider value={sfxVolume} onChange={sfxChangeHandler} onAfterChange={afterChangeHandler} />
      </div>

      <div className={styles.item}>
        <Label label="Фоновые звуки" />

        <Slider value={bgVolume} onChange={bgChangeHandler} onAfterChange={afterChangeHandler} />
      </div>
    </div>
  );
};
