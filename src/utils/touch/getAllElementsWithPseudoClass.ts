import { getAllCssRulesForElementsWithPseudoClass } from './getAllCssRulesForElementsWithPseudoClass';

let cachedAllElements: HTMLElement[] = [];

export function getAllElementsWithPseudoClass(pseudo: string, cache = true): HTMLElement[] {
  if (cachedAllElements.length && cache) {
    return cachedAllElements;
  }

  const elements = new Set();
  const cssRules = getAllCssRulesForElementsWithPseudoClass(pseudo);

  cssRules.forEach((rulesCur) => {
    const selector = rulesCur.selectorText.replace(pseudo, '');
    const element = document.querySelector(selector);

    elements.add(element);
  });

  cachedAllElements = Array.from(elements) as HTMLElement[];

  return cachedAllElements;
}
