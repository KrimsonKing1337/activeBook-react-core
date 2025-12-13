import { type PropsWithChildren } from 'react';
export type SegmentProps = PropsWithChildren & {
    isActive?: boolean;
    id?: string;
    onEnter?: () => void;
    onExit?: () => void;
};
export declare const Segment: ({ children, id: defaultId, isActive: isActiveDefault, onEnter, onExit, }: SegmentProps) => import("react/jsx-runtime").JSX.Element | null;
