/// <reference types="react" />
export type Page0Props = {
    header?: string;
    subHeader?: string;
    showButton?: boolean;
    Footer?: React.ElementType;
    goCallback?: () => Promise<void> | void;
};
export declare const Page0: ({ goCallback, header, subHeader, showButton, Footer }: Page0Props) => import("react/jsx-runtime").JSX.Element;
