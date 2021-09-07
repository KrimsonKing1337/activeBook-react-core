import React from 'react';

import { Label } from 'components/Label';
import { Spoiler as SpoilerComponent } from 'components/Spoiler';

import { Item } from 'pages/EffectExamples/components/Item';

export const Spoiler = () => {
  return (
    <Item>
      <Label label={'Спойлер'} />

      <SpoilerComponent style={{ marginTop: '10px' }}>
        Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности
        позволяет оценить значение существенных финансовых и административных условий.
        С другой стороны начало повседневной работы по формированию позиции требуют определения и уточнения
        существенных финансовых и административных условий.
      </SpoilerComponent>
    </Item>
  );
};
