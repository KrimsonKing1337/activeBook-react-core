declare function get(): any;
declare function set(value: number): void;
declare function setAll(values: Record<number, boolean>): void;
export declare const seenPages: {
    set: typeof set;
    setAll: typeof setAll;
    get: typeof get;
    key: string;
};
export {};
