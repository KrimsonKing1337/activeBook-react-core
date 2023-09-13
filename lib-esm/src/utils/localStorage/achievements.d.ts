import { Flags } from 'utils/effects/achievements/utils';
declare function get(name: Flags): any;
declare function getAll(): any;
declare function set(name: Flags, value: boolean): void;
declare function setAll(values: Record<Flags, boolean>): void;
declare function init(): void;
export declare const achievements: {
    set: typeof set;
    setAll: typeof setAll;
    get: typeof get;
    getAll: typeof getAll;
    key: string;
    init: typeof init;
};
export {};
