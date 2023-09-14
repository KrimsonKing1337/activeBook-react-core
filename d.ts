declare module '*.svg' {
  import { ReactElement, SVGProps } from 'react';

  const content: (props: SVGProps<SVGElement>) => ReactElement;
  export default content;
}

declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.jpg';
declare module '*.png';

declare var process: {
  env: {
    ENCRYPT_STORAGE_SECRET_KEY: string;
    PAGES: string;
    EASTER_EGGS: string;
    AUTHOR_COMMENTS: string;
  }
}

declare var isDemoMode: boolean;
