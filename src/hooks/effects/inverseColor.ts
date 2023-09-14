import { useDispatch } from 'store';
import { effectsActions } from 'store/effects/common';

export function useInverseColor() {
  const dispatch = useDispatch();

  const on = () => dispatch(effectsActions.setInverseColorActiveState(true));
  const off = () => dispatch(effectsActions.setInverseColorActiveState(false));

  return {
    inverseColorOn: on,
    inverseColorOff: off,
  };
}
