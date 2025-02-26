import { type PropsWithChildren } from 'react';
export type SegmentProps = PropsWithChildren & {
    isActive?: boolean;
    id?: string;
};
export declare const Segment: ({ id: defaultId, isActive: isActiveDefault, children }: SegmentProps) => import("react/jsx-runtime").JSX.Element | null;
