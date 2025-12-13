import { getAllCssRulesForElementsWithPseudoClass } from './getAllCssRulesForElementsWithPseudoClass';
export function replaceCssPseudoClassWith(pseudo, replaceValue) {
    var cssRules = getAllCssRulesForElementsWithPseudoClass(pseudo);
    cssRules.forEach(function (rulesCur) {
        var selectorText = rulesCur.selectorText;
        rulesCur.selectorText = selectorText.replace(pseudo, replaceValue);
    });
}
//# sourceMappingURL=replaceCssPseudoClassWith.js.map