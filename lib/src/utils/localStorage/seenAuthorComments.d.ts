declare function get(): any;
declare function add(): void;
declare function set(values: Record<number, boolean>): void;
export declare const seenAuthorComments: {
    add: typeof add;
    set: typeof set;
    get: typeof get;
    key: string;
};
export {};
