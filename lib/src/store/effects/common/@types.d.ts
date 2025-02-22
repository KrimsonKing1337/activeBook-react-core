import type { UseFontOptions } from '../../../hooks/effects/font';
export interface State {
    inverseColorIsActive: boolean;
    dotsIsActive: boolean;
    fontColor: UseFontOptions['color'];
    fontStyle: Exclude<UseFontOptions, 'color'>;
}
