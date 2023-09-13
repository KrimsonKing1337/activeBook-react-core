import { replaceCssPseudoClassWith } from './replaceCssPseudoClassWith';

export function removeCssHover() {
  if ('ontouchstart' in document.documentElement) {
    setTimeout(() => {
      /*
       тут что угодно можно передать, на самом деле, :hover уже пропадёт.
       но это важно в addTouchSupportForCssHover.ts
       если мы хотим имитировать :hover, но на тач-устройствах,
       нужно там в addClassListHover и removeClassListHover указать тот же селектор
      */
      replaceCssPseudoClassWith(':hover', 'disable-hover');
    }, 0);
  }
}
