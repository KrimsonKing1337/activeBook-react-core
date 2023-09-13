import { Color, Flags } from './utils';
export type PlayProps = {
    text: string;
    id: Flags;
    save?: boolean;
    type?: Color;
};
export declare function play({ text, id, save, type }: PlayProps): void;
