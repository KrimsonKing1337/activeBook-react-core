/// <reference types="react" />
export type Page0Props = {
    goCallback?: () => Promise<void> | void;
    header?: string;
    article?: string;
    showButton?: boolean;
    Footer?: React.ElementType;
};
export declare const Page0: ({ goCallback, header, article, showButton, Footer }: Page0Props) => import("react/jsx-runtime").JSX.Element;
