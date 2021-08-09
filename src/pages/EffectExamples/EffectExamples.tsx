import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Howl } from 'howler';

import {
  setBackgroundImgActiveState,
  setBackgroundVideoActiveState,
  setDotsActiveState,
  setInverseColorActiveState,
  setMenuActiveState,
  setSideTextActiveState,
} from 'store/effects/actions';
import { setIsLoading } from 'store/main/actions';

import { PageWrapper } from 'components/PageWrapper';
import { Toggle } from 'components/Menu/components/Toggle';
import { Modal } from 'components/Modal';
import { Spoiler } from 'components/Spoiler';
import { Label } from 'components/Label';
import { SlideShow } from 'components/SlideShow';
import { ModalDialog } from 'components/ModalDialog';
import { EasterEgg } from 'components/EasterEgg';

import styles from './EffectExamples.scss';

export const EffectExamples = () => {
  const dispatch = useDispatch();

  const [singleSound, setSingleSound] = useState<Howl>();
  const [loopSound, setLoopSound] = useState<Howl>();

  const [buttonForSingleSoundIsActive, setButtonForSingleSoundIsActive] = useState(false);
  const [buttonForLoadingStateIsActive, setButtonForLoadingStateIsActive] = useState(false);

  const [modalWithImgIsActive, setModalWithImgIsActive] = useState(false);
  const [buttonForModalWithImgIsActive, setButtonForModalWithImgIsActive] = useState(false);

  const [modalWithVideoIsActive, setModalWithVideoIsActive] = useState(false);
  const [buttonForModalWithVideoIsActive, setButtonForModalWithVideoIsActive] = useState(false);

  const [modalWithTextIsActive, setModalWithTextIsActive] = useState(false);
  const [buttonForModalWithTextIsActive, setButtonForModalWithTextIsActive] = useState(false);

  const [modalWithAnyIsActive, setModalWithAnyIsActive] = useState(false);
  const [buttonForModalWithAnyIsActive, setButtonForModalWithAnyIsActive] = useState(false);

  const [modalWithSlideShowIsActive, setModalWithSlideShowIsActive] = useState(false);
  const [buttonForModalWithSlideShowIsActive, setButtonForModalWithSlideShowIsActive] = useState(false);

  const [modalWithSlideShowWithAnyIsActive, setModalWithSlideShowWithAnyIsActive] = useState(false);
  const [buttonForModalWithSlideShowWithAnyIsActive, setButtonForModalWithSlideShowWithAnyIsActive] = useState(false);

  const [modalWithConfirmIsActive, setModalWithConfirmIsActive] = useState(false);
  const [buttonForModalWithConfirmIsActive, setButtonForModalWithConfirmIsActive] = useState(false);

  const [needToSetHeightForSpoilerWithSlider, setNeedToSetHeightForSpoilerWithSlider] = useState(false);

  const [modalWithEasterEggIsActive, setModalWithEasterEggIsActive] = useState(false);

  useEffect(() => {
    const singleSound = new Howl({
      src: ['assets/audios/single.mp3'],
    });

    const loopSound = new Howl({
      src: ['assets/audios/loop.mp3'],
      loop: true,
    });

    setSingleSound(singleSound);
    setLoopSound(loopSound);
  }, []);

  const buttonForSideShadowClickHandler = (value: boolean) => {
    dispatch(setMenuActiveState(value));
  };

  const buttonForSideTextClickHandler = (value: boolean) => {
    dispatch(setSideTextActiveState(value));
  };

  const buttonForBackgroundVideoClickHandler = (value: boolean) => {
    dispatch(setBackgroundVideoActiveState(value));
  };

  const buttonForBackgroundImgClickHandler = (value: boolean) => {
    dispatch(setBackgroundImgActiveState(value));
  };

  const buttonForInverseColorClickHandler = (value: boolean) => {
    dispatch(setInverseColorActiveState(value));
  };

  const buttonForDotsClickHandler = (value: boolean) => {
    dispatch(setDotsActiveState(value));
  };

  const buttonForSingleSoundClickHandler = (value: boolean) => {
    if (!value) {
      singleSound?.stop();
      setButtonForSingleSoundIsActive(false);

      return;
    }

    singleSound?.play();
    setButtonForSingleSoundIsActive(true);

    singleSound?.once('end', () => {
      setButtonForSingleSoundIsActive(false);
    });
  };

  const buttonForLoopSoundClickHandler = (value: boolean) => {
    value ? loopSound?.play() : loopSound?.stop();
  };

  const buttonForLoadingStateClickHandler = (value: boolean) => {
    dispatch(setIsLoading(value));
    setButtonForLoadingStateIsActive(value);

    setTimeout(() => {
      document.addEventListener('click', () => {
        dispatch(setIsLoading(false));
        setButtonForLoadingStateIsActive(false);
      }, { once: true });
    }, 0);
  };

  const modalWithImgIsActiveOnClose = () => {
    setModalWithImgIsActive(false);
    setButtonForModalWithImgIsActive(false);
  };

  const buttonForModalWithImgClickHandler = (value: boolean) => {
    if (!value) {
      return;
    }

    setButtonForModalWithImgIsActive(true);
    setModalWithImgIsActive(true);
  };

  const modalWithVideoIsActiveOnClose = () => {
    setModalWithVideoIsActive(false);
    setButtonForModalWithVideoIsActive(false);
  };

  const buttonForModalWithVideoClickHandler = (value: boolean) => {
    if (!value) {
      return;
    }

    setButtonForModalWithVideoIsActive(true);
    setModalWithVideoIsActive(true);
  };

  const modalWithTextIsActiveOnClose = () => {
    setModalWithTextIsActive(false);
    setButtonForModalWithTextIsActive(false);
  };

  const buttonForModalWithTextClickHandler = (value: boolean) => {
    if (!value) {
      return;
    }

    setModalWithTextIsActive(true);
    setButtonForModalWithTextIsActive(true);
  };

  const modalWithAnyIsActiveOnClose = () => {
    setModalWithAnyIsActive(false);
    setButtonForModalWithAnyIsActive(false);
  };

  const buttonForModalWithAnyClickHandler = (value: boolean) => {
    if (!value) {
      return;
    }

    setModalWithAnyIsActive(true);
    setButtonForModalWithAnyIsActive(true);
  };

  const modalWithSlideShowIsActiveOnClose = () => {
    setModalWithSlideShowIsActive(false);
    setButtonForModalWithSlideShowIsActive(false);
  };

  const buttonForModalWithSlideShowClickHandler = (value: boolean) => {
    if (!value) {
      return;
    }

    setModalWithSlideShowIsActive(true);
    setButtonForModalWithSlideShowIsActive(true);
  };

  const modalWithSlideShowWithAnyIsActiveOnClose = () => {
    setModalWithSlideShowWithAnyIsActive(false);
    setButtonForModalWithSlideShowWithAnyIsActive(false);
  };

  const buttonForModalWithSlideShowWithAnyClickHandler = (value: boolean) => {
    if (!value) {
      return;
    }

    setModalWithSlideShowWithAnyIsActive(true);
    setButtonForModalWithSlideShowWithAnyIsActive(true);
  };

  const modalWithConformIsActiveOnClose = () => {
    setModalWithConfirmIsActive(false);
    setButtonForModalWithConfirmIsActive(false);
  };

  const buttonForModalWithConfirmClickHandler = (value: boolean) => {
    if (!value) {
      return;
    }

    setModalWithConfirmIsActive(true);
    setButtonForModalWithConfirmIsActive(true);
  };

  const modalWithEasterEggIsActiveOnClose = () => setModalWithEasterEggIsActive(false);

  return (
    <PageWrapper title={'Эффекты'} subtitle={'Здесь можно посмотреть все возможные эффекты'}>
      {/* Многострочный текст-рыба для проверки эффектов и изменений в настройках: */}
      <div>
        Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности
        позволяет оценить значение существенных финансовых и административных условий.
        С другой стороны начало повседневной работы по формированию позиции требуют определения и уточнения
        существенных финансовых и административных условий.
      </div>

      <div className={'EffectsWrapper'}>
        <Toggle
          label={'Боковая тень'}
          isActiveDefault={false}
          onClickOn={() => buttonForSideShadowClickHandler(true)}
          onClickOff={() => buttonForSideShadowClickHandler(false)}
        />

        <Toggle
          label={'Боковой текст'}
          isActiveDefault={false}
          onClickOn={() => buttonForSideTextClickHandler(true)}
          onClickOff={() => buttonForSideTextClickHandler(false)}
        />

        <Toggle
          label={'Видео на заднем фоне'}
          isActiveDefault={false}
          onClickOn={() => buttonForBackgroundVideoClickHandler(true)}
          onClickOff={() => buttonForBackgroundVideoClickHandler(false)}
        />

        <Toggle
          label={'Изображение на заднем фоне'}
          isActiveDefault={false}
          onClickOn={() => buttonForBackgroundImgClickHandler(true)}
          onClickOff={() => buttonForBackgroundImgClickHandler(false)}
        />

        <Toggle
          label={'Инверсия цвета'}
          isActiveDefault={false}
          onClickOn={() => buttonForInverseColorClickHandler(true)}
          onClickOff={() => buttonForInverseColorClickHandler(false)}
        />

        <Toggle
          label={'Точки по углам'}
          isActiveDefault={false}
          onClickOn={() => buttonForDotsClickHandler(true)}
          onClickOff={() => buttonForDotsClickHandler(false)}
        />

        <Toggle
          label={'Одиночный звук'}
          isActiveDefault={false}
          isActive={buttonForSingleSoundIsActive}
          onClickOn={() => buttonForSingleSoundClickHandler(true)}
          onClickOff={() => buttonForSingleSoundClickHandler(false)}
        />

        <Toggle
          label={'Лупованый звук'}
          isActiveDefault={false}
          onClickOn={() => buttonForLoopSoundClickHandler(true)}
          onClickOff={() => buttonForLoopSoundClickHandler(false)}
        />

        <Toggle
          label={'Состояние загрузки (для отмены - клик в любое место)'}
          isActiveDefault={false}
          isActive={buttonForLoadingStateIsActive}
          onClickOn={() => buttonForLoadingStateClickHandler(true)}
          onClickOff={() => buttonForLoadingStateClickHandler(false)}
        />

        <Modal
          isOpen={modalWithImgIsActive}
          closeFunction={modalWithImgIsActiveOnClose}
          mode={'media'}
        >
          <img src="/assets/img/cinemagraph.gif" alt="" />
        </Modal>

        <Toggle
          label={'Модалка с изображением'}
          isActiveDefault={false}
          isActive={buttonForModalWithImgIsActive}
          onClickOn={() => buttonForModalWithImgClickHandler(true)}
          onClickOff={() => buttonForModalWithImgClickHandler(false)}
        />

        <Modal
          isOpen={modalWithVideoIsActive}
          closeFunction={modalWithVideoIsActiveOnClose}
          mode={'media'}
          hideExpandButton={true}
        >
          <video src="/assets/videos/TV_static-2.mp4" loop autoPlay muted controls />
        </Modal>

        <Toggle
          label={'Модалка с видео'}
          isActiveDefault={false}
          isActive={buttonForModalWithVideoIsActive}
          onClickOn={() => buttonForModalWithVideoClickHandler(true)}
          onClickOff={() => buttonForModalWithVideoClickHandler(false)}
        />

        <Modal isOpen={modalWithTextIsActive} closeFunction={modalWithTextIsActiveOnClose}>
          <div>
            Товарищи! начало повседневной работы по формированию позиции играет важную роль в формировании систем
            массового участия. С другой стороны дальнейшее развитие различных форм деятельности играет важную роль в
            формировании модели развития. С другой стороны новая модель организационной деятельности представляет собой
            интересный эксперимент проверки соответствующий условий активизации. Не следует, однако забывать, что начало
            повседневной работы по формированию позиции играет важную роль в формировании новых предложений.

            Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности позволяет выполнять
            важные задания по разработке дальнейших направлений развития. Таким образом постоянный количественный рост и
            сфера нашей активности способствует подготовки и реализации существенных финансовых и административных
            условий. Задача организации, в особенности же новая модель организационной деятельности влечет за собой
            процесс внедрения и модернизации дальнейших направлений развития. Идейные соображения высшего порядка, а
            также постоянный количественный рост и сфера нашей активности позволяет выполнять важные задания по
            разработке форм развития.
          </div>
        </Modal>

        <Toggle
          label={'Модалка с текстом'}
          isActiveDefault={false}
          isActive={buttonForModalWithTextIsActive}
          onClickOn={() => buttonForModalWithTextClickHandler(true)}
          onClickOff={() => buttonForModalWithTextClickHandler(false)}
        />

        <Modal isOpen={modalWithAnyIsActive} closeFunction={modalWithAnyIsActiveOnClose}>
          <div>
            <img src="/assets/img/cinemagraph.gif" alt="" />

            Товарищи! начало повседневной работы по формированию позиции играет важную роль в формировании систем
            массового участия. С другой стороны дальнейшее развитие различных форм деятельности играет важную роль в
            формировании модели развития. С другой стороны новая модель организационной деятельности представляет собой
            интересный эксперимент проверки соответствующий условий активизации. Не следует, однако забывать, что начало
            повседневной работы по формированию позиции играет важную роль в формировании новых предложений.

            <video src="/assets/videos/TV_static-2.mp4" loop autoPlay muted />

            Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности позволяет выполнять
            важные задания по разработке дальнейших направлений развития. Таким образом постоянный количественный рост и
            сфера нашей активности способствует подготовки и реализации существенных финансовых и административных
            условий. Задача организации, в особенности же новая модель организационной деятельности влечет за собой
            процесс внедрения и модернизации дальнейших направлений развития. Идейные соображения высшего порядка, а
            также постоянный количественный рост и сфера нашей активности позволяет выполнять важные задания по
            разработке форм развития.
          </div>
        </Modal>

        <Toggle
          label={'Модалка с разным контентом'}
          isActiveDefault={false}
          isActive={buttonForModalWithAnyIsActive}
          onClickOn={() => buttonForModalWithAnyClickHandler(true)}
          onClickOff={() => buttonForModalWithAnyClickHandler(false)}
        />

        <Modal
          isOpen={modalWithSlideShowIsActive}
          closeFunction={modalWithSlideShowIsActiveOnClose}
          mode={'media'}
          hideCropButton={true}
        >
          <SlideShow isVisible={modalWithSlideShowIsActive} mode={'modal'}>
            <img src="/assets/img/1.jpg" alt="" />
            <img src="/assets/img/2.jpg" alt="" />
            <img src="/assets/img/3.jpg" alt="" />
            <img src="/assets/img/4.jpg" alt="" />
          </SlideShow>
        </Modal>

        <Toggle
          label={'Модалка со слайдшоу'}
          isActiveDefault={false}
          isActive={buttonForModalWithSlideShowIsActive}
          onClickOn={() => buttonForModalWithSlideShowClickHandler(true)}
          onClickOff={() => buttonForModalWithSlideShowClickHandler(false)}
        />

        <Modal isOpen={modalWithSlideShowWithAnyIsActive} closeFunction={modalWithSlideShowWithAnyIsActiveOnClose}>
          <SlideShow isVisible={modalWithSlideShowWithAnyIsActive} mode={'modal'}>
            <img src="/assets/img/1.jpg" alt="" />

            <div>
              <img src="/assets/img/cinemagraph.gif" alt="" />

              Товарищи! начало повседневной работы по формированию позиции играет важную роль в формировании систем
              массового участия. С другой стороны дальнейшее развитие различных форм деятельности играет важную роль в
              формировании модели развития. С другой стороны новая модель организационной деятельности представляет собой
              интересный эксперимент проверки соответствующий условий активизации. Не следует, однако забывать, что начало
              повседневной работы по формированию позиции играет важную роль в формировании новых предложений.

              Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности позволяет выполнять
              важные задания по разработке дальнейших направлений развития. Таким образом постоянный количественный рост и
              сфера нашей активности способствует подготовки и реализации существенных финансовых и административных
              условий. Задача организации, в особенности же новая модель организационной деятельности влечет за собой
              процесс внедрения и модернизации дальнейших направлений развития. Идейные соображения высшего порядка, а
              также постоянный количественный рост и сфера нашей активности позволяет выполнять важные задания по
              разработке форм развития.
            </div>

            <video src="/assets/videos/TV_static-2.mp4" loop autoPlay muted />
          </SlideShow>
        </Modal>

        <Toggle
          label={'Модалка со слайдшоу и смешанным содержимым'}
          isActiveDefault={false}
          isActive={buttonForModalWithSlideShowWithAnyIsActive}
          onClickOn={() => buttonForModalWithSlideShowWithAnyClickHandler(true)}
          onClickOff={() => buttonForModalWithSlideShowWithAnyClickHandler(false)}
        />

        <ModalDialog
          isOpen={modalWithConfirmIsActive}
          closeFunction={modalWithConformIsActiveOnClose}
          onConfirm={modalWithConformIsActiveOnClose}
          onCancel={modalWithConformIsActiveOnClose}
        >
          <div>
            Вы действительно хотите сделать действие?
          </div>
        </ModalDialog>

        <Toggle
          label={'Модалка с диалогом'}
          isActiveDefault={false}
          isActive={buttonForModalWithConfirmIsActive}
          onClickOn={() => buttonForModalWithConfirmClickHandler(true)}
          onClickOff={() => buttonForModalWithConfirmClickHandler(false)}
        />

        <div className={styles.item}>
          <Label label={'Спойлер'} />

          <Spoiler style={{ marginTop: '10px' }}>
            Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности
            позволяет оценить значение существенных финансовых и административных условий.
            С другой стороны начало повседневной работы по формированию позиции требуют определения и уточнения
            существенных финансовых и административных условий.
          </Spoiler>
        </div>

        <div className={styles.item}>
          <Label label={'Спойлер со слайдшоу'} />

          <Spoiler
            needToSetHeight={needToSetHeightForSpoilerWithSlider}
            setNeedToSetHeightToFalse={() => setNeedToSetHeightForSpoilerWithSlider(false)}
            style={{ marginTop: '10px' }}
          >
            <SlideShow isWithoutBorders={true} onSlideChange={() => setNeedToSetHeightForSpoilerWithSlider(true)}>
              <img src="/assets/img/1.jpg" alt="" />
              <img src="/assets/img/2.jpg" alt="" />
              <img src="/assets/img/3.jpg" alt="" />
              <img src="/assets/img/4.jpg" alt="" />
            </SlideShow>
          </Spoiler>
        </div>

        <div className={styles.item}>
          <Label label={'Спойлер со слайдшоу со смешнным содержимым'} />

          <Spoiler
            needToSetHeight={needToSetHeightForSpoilerWithSlider}
            setNeedToSetHeightToFalse={() => setNeedToSetHeightForSpoilerWithSlider(false)}
            style={{ marginTop: '10px' }}
          >
            <SlideShow onSlideChange={() => setNeedToSetHeightForSpoilerWithSlider(true)}>
              <img src="/assets/img/1.jpg" alt="" />

              <div>
                <img src="/assets/img/cinemagraph.gif" alt="" />

                Товарищи! начало повседневной работы по формированию позиции играет важную роль в формировании систем
                массового участия. С другой стороны дальнейшее развитие различных форм деятельности играет важную роль в
                формировании модели развития. С другой стороны новая модель организационной деятельности представляет собой
                интересный эксперимент проверки соответствующий условий активизации. Не следует, однако забывать, что начало
                повседневной работы по формированию позиции играет важную роль в формировании новых предложений.

                Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности позволяет выполнять
                важные задания по разработке дальнейших направлений развития. Таким образом постоянный количественный рост и
                сфера нашей активности способствует подготовки и реализации существенных финансовых и административных
                условий. Задача организации, в особенности же новая модель организационной деятельности влечет за собой
                процесс внедрения и модернизации дальнейших направлений развития. Идейные соображения высшего порядка, а
                также постоянный количественный рост и сфера нашей активности позволяет выполнять важные задания по
                разработке форм развития.
              </div>

              <video src="/assets/videos/TV_static-2.mp4" loop autoPlay muted />
            </SlideShow>
          </Spoiler>
        </div>

        <div className={styles.item}>
          <Modal isOpen={modalWithEasterEggIsActive} closeFunction={modalWithEasterEggIsActiveOnClose}>
            Вы нашли пасхалку! Вот вам ачивка
          </Modal>

          <EasterEgg onClick={() => setModalWithEasterEggIsActive(true)}>
            Текст с пасхалкой (нажми меня)
          </EasterEgg>
        </div>
      </div>
    </PageWrapper>
  );
};
