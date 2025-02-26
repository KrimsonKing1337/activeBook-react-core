import { type PropsWithChildren } from 'react';
export type SegmentProps = PropsWithChildren & {
    isActive?: boolean;
    id?: string;
    onActive?: () => void;
    onExit?: () => void;
};
export declare const Segment: ({ children, id: defaultId, isActive: isActiveDefault, onActive, onExit, }: SegmentProps) => import("react/jsx-runtime").JSX.Element | null;
