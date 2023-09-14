import { Color } from '../../../utils/effects/achievements/utils';
export type ItemProps = {
    title: string;
    status: boolean;
    type: Color;
};
export declare const Item: ({ title, status, type }: ItemProps) => import("react/jsx-runtime").JSX.Element;
