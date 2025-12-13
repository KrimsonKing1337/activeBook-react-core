var cachedAllCssRules = [];
export function getAllCssRulesForElementsWithPseudoClass(pseudo, cache) {
    var _a;
    if (cache === void 0) { cache = true; }
    if (cachedAllCssRules.length && cache) {
        return cachedAllCssRules;
    }
    var result = new Set();
    var styleSheets = document.styleSheets;
    for (var i = 0; i < styleSheets.length; i++) {
        var cssRules = styleSheets[i].cssRules;
        for (var j = 0; j < cssRules.length; j++) {
            var rules = cssRules[j];
            if ((_a = rules === null || rules === void 0 ? void 0 : rules.selectorText) === null || _a === void 0 ? void 0 : _a.includes(pseudo)) {
                result.add(rules);
            }
        }
    }
    cachedAllCssRules = Array.from(result);
    return cachedAllCssRules;
}
//# sourceMappingURL=getAllCssRulesForElementsWithPseudoClass.js.map