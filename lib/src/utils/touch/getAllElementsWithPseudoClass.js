"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllElementsWithPseudoClass = void 0;
var getAllCssRulesForElementsWithPseudoClass_1 = require("./getAllCssRulesForElementsWithPseudoClass");
var cachedAllElements = [];
function getAllElementsWithPseudoClass(pseudo, cache) {
    if (cache === void 0) { cache = true; }
    if (cachedAllElements.length && cache) {
        return cachedAllElements;
    }
    var elements = new Set();
    var cssRules = (0, getAllCssRulesForElementsWithPseudoClass_1.getAllCssRulesForElementsWithPseudoClass)(pseudo);
    cssRules.forEach(function (rulesCur) {
        var selector = rulesCur.selectorText.replace(pseudo, '');
        var element = document.querySelector(selector);
        elements.add(element);
    });
    cachedAllElements = Array.from(elements);
    return cachedAllElements;
}
exports.getAllElementsWithPseudoClass = getAllElementsWithPseudoClass;
//# sourceMappingURL=getAllElementsWithPseudoClass.js.map