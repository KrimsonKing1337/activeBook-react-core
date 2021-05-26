import { getAllCssRulesForElementsWithPseudoClass } from './getAllCssRulesForElementsWithPseudoClass';

export function replaceCssPseudoClassWith(pseudo: string, replaceValue: string): void {
  const cssRules = getAllCssRulesForElementsWithPseudoClass(pseudo);

  cssRules.forEach((rulesCur) => {
    const { selectorText } = rulesCur;

    rulesCur.selectorText = selectorText.replace(pseudo, replaceValue);
  });
}
