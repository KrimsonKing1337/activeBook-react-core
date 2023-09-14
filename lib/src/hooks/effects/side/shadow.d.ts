export type useSideShadowProps = {
    isActiveDefault?: boolean;
    color: string;
    speed?: number;
};
export declare function useSideShadow({ isActiveDefault, color, speed }: useSideShadowProps): {
    sideShadowOn: () => void;
    sideShadowOff: () => void;
};
