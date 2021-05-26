let cachedAllCssRules: CSSStyleRule[] = [];

export function getAllCssRulesForElementsWithPseudoClass(pseudo: string, cache = true): CSSStyleRule[] {
  if (cachedAllCssRules.length && cache) {
    return cachedAllCssRules;
  }

  const result = new Set();
  const { styleSheets } = document;

  for (let i = 0; i < styleSheets.length; i++) {
    const { cssRules } = styleSheets[i];

    for (let j = 0; j < cssRules.length; j++) {
      const rules = cssRules[j] as CSSStyleRule;

      if (rules?.selectorText?.includes(pseudo)) {
        result.add(rules);
      }
    }
  }

  cachedAllCssRules = Array.from(result) as CSSStyleRule[];

  return cachedAllCssRules;
}
