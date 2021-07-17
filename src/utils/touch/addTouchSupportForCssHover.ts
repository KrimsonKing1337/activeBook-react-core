import { getAllElementsWithPseudoClass } from './getAllElementsWithPseudoClass';
import { replaceCssPseudoClassWith } from './replaceCssPseudoClassWith';

function touchStartHandler() {
  const { classList } = document.body;

  if (classList.contains('is-touch')) {
    return;
  }

  replaceCssPseudoClassWith(':hover', '.hover');

  classList.add('is-touch');
}

function mouseOverHandler() {
  const { classList } = document.body;

  if (!classList.contains('is-touch')) {
    return;
  }

  replaceCssPseudoClassWith('.hover', ':hover');

  classList.remove('is-touch');
}

export function addTouchSupportForCssHover() {
  const elementsWithHover = getAllElementsWithPseudoClass(':hover');

  elementsWithHover.forEach((elementCur) => {
    if (!elementCur) {
      return;
    }

    const addClassListHover = () => elementCur.classList.add('hover');
    const removeClassListHover = () => elementCur.classList.remove('hover');

    elementCur.addEventListener('touchstart', addClassListHover);
    elementCur.addEventListener('touchmove', addClassListHover);
    elementCur.addEventListener('touchend', removeClassListHover);
    elementCur.addEventListener('touchcancel', removeClassListHover);
  });

  document.addEventListener('touchstart', touchStartHandler);
  document.addEventListener('mouseover', mouseOverHandler);
}
