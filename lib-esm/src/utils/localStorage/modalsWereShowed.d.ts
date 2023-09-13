export declare enum Flags {
    usingCamera = "usingCamera",
    inverseColor = "inverseColor"
}
declare function get(name: Flags): any;
declare function getAll(): any;
declare function set(name: Flags, value: boolean): void;
declare function setAll(values: Record<Flags, boolean>): void;
export declare const modalsWereShowed: {
    set: typeof set;
    setAll: typeof setAll;
    get: typeof get;
    getAll: typeof getAll;
    key: string;
};
export {};
