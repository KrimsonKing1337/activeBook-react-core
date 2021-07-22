import React from 'react';
import { useSelector } from 'react-redux';

import { effectsSelectors } from 'store/effects/reducer';

import { SideShadow } from './components/SideShadow';
import { SideText } from './components/SideText';

import styles from './SideEffects.scss';
import sideTextStyles from './components/SideText/SideText.scss';

export const SideEffects = () => {
  const sideShadowIsActive = useSelector(effectsSelectors.sideShadowIsActive);
  const sideTextIsActive = useSelector(effectsSelectors.sideTextIsActive);

  return (
    <div className={styles.sideEffects}>
      {sideShadowIsActive && <SideShadow />}
      {sideTextIsActive && (
        <SideText>
          <>
            <span>
              целостность обшивки: 99.9%;
            </span>

            <span className={sideTextStyles.defaultMargin} />

            <span>
              температура: 23 градуса по цельсию;
            </span>

            <span className={sideTextStyles.defaultMargin} />

            <span className={sideTextStyles.warning}>
              пульс: повышенный, рекомендуется приём успокоительного;
            </span>

            <span className={sideTextStyles.defaultMargin} />

            <span>
              информация о маршруте: по пути следования обнаружен астероид, курс был скорректирован;
            </span>

            <span className={sideTextStyles.defaultMargin} />

            <span className={sideTextStyles.ok}>
              ваш кофе готов;
            </span>

            <span className={sideTextStyles.defaultMargin} />

            <span>
              статус элементов питания: элементы питания заряжены на 91%, разряжаются;
            </span>

            <span className={sideTextStyles.defaultMargin} />

            <span className={sideTextStyles.warning}>
              напоминание: доиграть партию в мини-гольф;
            </span>

            <span className={sideTextStyles.defaultMargin} />

            <span className={sideTextStyles.error}>
              sudo: в правах суперпользователя отказано, проверьте правильность вводимого пароля;
            </span>

            <span className={sideTextStyles.defaultMargin} />

            <span>
              освещение: освещение изменено в соответствии с привычным для пользователя в это время суток;
            </span>

            <span className={sideTextStyles.defaultMargin} />

            <span>
              ты правда это читаешь? ну ты котик!
            </span>

            <span className={sideTextStyles.defaultMargin} />
          </>

          <>
            <span>
              целостность обшивки: 99.9%;
            </span>

            <span className={sideTextStyles.defaultMargin} />

            <span>
              температура: 23 градуса по цельсию;
            </span>

            <span className={sideTextStyles.defaultMargin} />

            <span className={sideTextStyles.warning}>
              пульс: повышенный, рекомендуется приём успокоительного;
            </span>

            <span className={sideTextStyles.defaultMargin} />

            <span>
              информация о маршруте: по пути следования обнаружен астероид, курс был скорректирован;
            </span>

            <span className={sideTextStyles.defaultMargin} />

            <span className={sideTextStyles.ok}>
              ваш кофе готов;
            </span>

            <span className={sideTextStyles.defaultMargin} />

            <span>
              статус элементов питания: элементы питания заряжены на 91%, разряжаются;
            </span>

            <span className={sideTextStyles.defaultMargin} />

            <span className={sideTextStyles.warning}>
              напоминание: доиграть партию в мини-гольф;
            </span>

            <span className={sideTextStyles.defaultMargin} />

            <span className={sideTextStyles.error}>
              sudo: в правах суперпользователя отказано, проверьте правильность вводимого пароля;
            </span>

            <span className={sideTextStyles.defaultMargin} />

            <span>
              освещение: освещение изменено в соответствии с привычным для пользователя в это время суток;
            </span>

            <span className={sideTextStyles.defaultMargin} />
          </>
        </SideText>
      )}
    </div>
  );
};
