import { ReactNode, useEffect } from 'react';

import { useDispatch } from 'store';
import { sideTextActions } from 'store/effects/side/text';
import { initialState } from 'store/effects/side/text/slice';

export type useSideTextProps = {
  isActiveDefault?: boolean;
  template: ReactNode;
  speed?: number;
};

export function useSideText({ isActiveDefault = true, template, speed = initialState.speed }: useSideTextProps) {
  const dispatch = useDispatch();

  const on = () => {
    dispatch(sideTextActions.setActiveState(true));
  };

  const off = () => {
    dispatch(sideTextActions.setActiveState(false));
  };

  useEffect(() => {
    dispatch(sideTextActions.setTemplate(template));
    dispatch(sideTextActions.setSpeed(speed));
    dispatch(sideTextActions.setActiveState(isActiveDefault));

    return () => {
      off();
    };
  }, []);

  return { sideTextOn: on, sideTextOff: off };
}
