import { type PropsWithChildren, useEffect } from 'react';

import { useDispatch } from 'store';
import { effectsActions } from 'store/effects/common';

export type DotLottieReactWrapperProps = PropsWithChildren & React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  amount?: number;
};

export const DotLottieReactWrapper = ({ children, amount = 1, className = '', ...etc }: DotLottieReactWrapperProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(effectsActions.setDotLottieAmount(amount));

    return () => {
      dispatch(effectsActions.setDotLottieAmount(0));
      dispatch(effectsActions.setDotLottieReadyAmount(0));
    };
  }, []);

  return (
    <div className={className} {...etc}>
      {children}
    </div>
  );
};
