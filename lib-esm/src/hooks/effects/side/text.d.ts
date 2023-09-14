import { ReactNode } from 'react';
export type useSideTextProps = {
    isActiveDefault?: boolean;
    template: ReactNode;
    speed?: number;
};
export declare function useSideText({ isActiveDefault, template, speed }: useSideTextProps): {
    sideTextOn: () => void;
    sideTextOff: () => void;
};
