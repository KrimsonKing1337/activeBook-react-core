"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceCssPseudoClassWith = void 0;
var getAllCssRulesForElementsWithPseudoClass_1 = require("./getAllCssRulesForElementsWithPseudoClass");
function replaceCssPseudoClassWith(pseudo, replaceValue) {
    var cssRules = (0, getAllCssRulesForElementsWithPseudoClass_1.getAllCssRulesForElementsWithPseudoClass)(pseudo);
    cssRules.forEach(function (rulesCur) {
        var selectorText = rulesCur.selectorText;
        rulesCur.selectorText = selectorText.replace(pseudo, replaceValue);
    });
}
exports.replaceCssPseudoClassWith = replaceCssPseudoClassWith;
//# sourceMappingURL=replaceCssPseudoClassWith.js.map