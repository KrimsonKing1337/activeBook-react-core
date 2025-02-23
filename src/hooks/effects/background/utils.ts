import type { BackgroundEffectMediaPosition } from './@types';

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
