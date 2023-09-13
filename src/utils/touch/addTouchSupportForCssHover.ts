import { getAllElementsWithPseudoClass } from './getAllElementsWithPseudoClass';
import { replaceCssPseudoClassWith } from './replaceCssPseudoClassWith';
import { selectorInsteadOfHover } from './utils';

function touchStartHandler() {
  const { classList } = document.body;

  if (classList.contains('is-touch')) {
    return;
  }

  replaceCssPseudoClassWith(':hover', `.${selectorInsteadOfHover}`);

  classList.add('is-touch');
}

// todo: не нашёл, у какого event-а есть свойство sourceCapabilities
function mouseOverHandler(e: any) {
  if (e?.sourceCapabilities?.firesTouchEvents) {
    return;
  }

  const { classList } = document.body;

  if (!classList.contains('is-touch')) {
    return;
  }

  replaceCssPseudoClassWith(`.${selectorInsteadOfHover}`, ':hover');

  classList.remove('is-touch');
}

export function addTouchSupportForCssHover() {
  const elementsWithHover = getAllElementsWithPseudoClass(':hover');

  elementsWithHover.forEach((elementCur) => {
    if (!elementCur) {
      return;
    }

    const addClassListHover = () => elementCur.classList.add(selectorInsteadOfHover);
    const removeClassListHover = () => elementCur.classList.remove(selectorInsteadOfHover);

    elementCur.addEventListener('touchstart', addClassListHover);
    elementCur.addEventListener('touchmove', addClassListHover);
    elementCur.addEventListener('touchend', removeClassListHover);
    elementCur.addEventListener('touchcancel', removeClassListHover);
  });

  document.addEventListener('touchstart', touchStartHandler);
  document.addEventListener('mouseover', mouseOverHandler);
}
