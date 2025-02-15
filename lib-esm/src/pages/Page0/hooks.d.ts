/// <reference types="react" />
export declare function useModal(): {
    modalIsActive: boolean;
    modalOnClose: () => void;
    setModalIsActive: import("react").Dispatch<import("react").SetStateAction<boolean>>;
};
