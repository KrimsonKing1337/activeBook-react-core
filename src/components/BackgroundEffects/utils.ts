import type { UseBackgroundMediaPosition } from 'hooks/effects/background';

export const getCssPositionByValue = (value: UseBackgroundMediaPosition) => {
  switch (value) {
  case 'center':
    return 'top: 0; bottom: 0; left: 0; right: 0;';
  case 'left':
    return 'top: 0; bottom: 0; left: 0;';
  case 'right':
    return 'top: 0; bottom: 0; right: 0;';
  case 'bottom':
    return 'bottom: 0; left: 0; right: 0;';
  case 'top':
    return 'top: 0; left: 0; right: 0;';
  case 'top-left':
    return 'top: 0; left: 0;';
  case 'top-right':
    return 'top: 0; right: 0;';
  case 'bottom-left':
    return 'bottom: 0; left: 0;';
  case 'bottom-right':
    return 'bottom: 0; right: 0;';
  }
};
