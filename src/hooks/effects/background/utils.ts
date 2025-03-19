import { isEqual } from 'lodash-es';

import type { BackgroundEffect, BackgroundEffectMediaPosition } from './@types';

export const getPositionByPreset = (value: BackgroundEffectMediaPosition): React.CSSProperties => {
  switch (value) {
  case 'center':
    return {
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
    };
  case 'left':
    return {
      top: '0',
      bottom: '0',
      left: '0',
      right: 'auto',
    };
  case 'right':
    return {
      top: '0',
      bottom: '0',
      left: 'auto',
      right: '0',
    };
  case 'bottom':
    return {
      top: 'auto',
      bottom: '0',
      left: '0',
      right: '0',
    };
  case 'top':
    return {
      top: '0',
      bottom: 'auto',
      left: '0',
      right: '0',
    };
  case 'top-left':
    return {
      top: '0',
      bottom: 'auto',
      left: '0',
      right: 'auto',
    };
  case 'top-right':
    return {
      top: '0',
      bottom: 'auto',
      left: 'auto',
      right: '0',
    };
  case 'bottom-left':
    return {
      top: 'auto',
      bottom: '0',
      left: '0',
      right: 'auto',
    };
  case 'bottom-right':
    return {
      top: 'auto',
      bottom: '0',
      left: 'auto',
      right: '0',
    };
  }
};

/*
  сравниваю без Component, потому что его сравнение всегда приводит к false.
  только если он появился или исчез - только тогда делаем ререндер
*/
export const effectsAreEqual = (effect1: BackgroundEffect, effect2: BackgroundEffect) => {
  if (effect1.Component && !effect2.Component) {
    return false;
  }

  if (!effect1.Component && effect2.Component) {
    return false;
  }

  const effect1WithoutComponent = { ... effect1 };
  delete effect1WithoutComponent.Component;

  const effect2WithoutComponent = { ... effect2 };
  delete effect2WithoutComponent.Component;

  return isEqual(effect1WithoutComponent, effect2WithoutComponent);
};
