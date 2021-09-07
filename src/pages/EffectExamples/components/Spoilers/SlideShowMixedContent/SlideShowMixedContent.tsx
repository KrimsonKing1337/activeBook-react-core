import React, { useState } from 'react';

import { Label } from 'components/Label';
import { Spoiler } from 'components/Spoiler';
import { SlideShow } from 'components/SlideShow';

import { Item } from 'pages/EffectExamples/components/Item';

export const SlideShowMixedContent = () => {
  const [needToSetHeight, setNeedToSetHeight] = useState(false);

  return (
    <Item>
      <Label label={'Спойлер со слайдшоу со смешнным содержимым'} />

      <Spoiler
        needToSetHeight={needToSetHeight}
        setNeedToSetHeightToFalse={() => setNeedToSetHeight(false)}
        style={{ marginTop: '10px' }}
      >
        <SlideShow onSlideChange={() => setNeedToSetHeight(true)}>
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
    </Item>
  );
};
