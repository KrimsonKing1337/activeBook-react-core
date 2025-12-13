declare function get(): any;
declare function set(value: string): void;
declare function setAll(values: Record<string, boolean>): void;
export declare const foundEasterEggs: {
    set: typeof set;
    setAll: typeof setAll;
    get: typeof get;
    key: string;
};
export {};
