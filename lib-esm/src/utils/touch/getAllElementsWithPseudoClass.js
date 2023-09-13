import { getAllCssRulesForElementsWithPseudoClass } from './getAllCssRulesForElementsWithPseudoClass';
var cachedAllElements = [];
export function getAllElementsWithPseudoClass(pseudo, cache) {
    if (cache === void 0) { cache = true; }
    if (cachedAllElements.length && cache) {
        return cachedAllElements;
    }
    var elements = new Set();
    var cssRules = getAllCssRulesForElementsWithPseudoClass(pseudo);
    cssRules.forEach(function (rulesCur) {
        var selector = rulesCur.selectorText.replace(pseudo, '');
        var element = document.querySelector(selector);
        elements.add(element);
    });
    cachedAllElements = Array.from(elements);
    return cachedAllElements;
}
//# sourceMappingURL=getAllElementsWithPseudoClass.js.map