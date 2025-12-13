import type { UseFontOptions } from '../../../hooks/effects/font';
export interface State {
    color: UseFontOptions['color'];
    style: Exclude<UseFontOptions, 'color'>;
}
