export declare function useInverseColor(): {
    inverseColorOn: () => {
        payload: boolean;
        type: "@effects/common/setInverseColorActiveState";
    };
    inverseColorOff: () => {
        payload: boolean;
        type: "@effects/common/setInverseColorActiveState";
    };
};
