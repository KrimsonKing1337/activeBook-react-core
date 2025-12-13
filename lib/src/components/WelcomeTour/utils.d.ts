export type WelcomeTourTextItem = {
    header?: string;
    desc: string;
};
export declare const getWelcomeTourTextById: (id: string) => WelcomeTourTextItem;
export declare const removeHighLight: () => void;
export declare const setHighLight: (id: string) => void;
