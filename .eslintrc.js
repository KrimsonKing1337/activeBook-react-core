module.exports = {
  "parser": "@typescript-eslint/parser",
  "plugins": ["import", "@typescript-eslint", "react", "react-hooks", "jest"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parserOptions": {
    "project": "./tsconfig.json",
    "ecmaVersion": 2021,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "import/order": [
      "error",
      {
        "newlines-between": "always-and-inside-groups",
        "groups": [["builtin", "external"], "internal", ["parent", "sibling", "index"]],
        "pathGroups": [
          {
            "pattern": "{api,app,assets,common,hooks,store,components,styles,types,utils}{**,**/**}",
            "group": "internal"
          },
          {
            "pattern": "react",
            "group": "external",
            "position": "before"
          }
        ],
        "pathGroupsExcludedImportTypes": []
      }
    ],

    "eol-last": ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
    "semi": ["error", "always"],
    "indent": ["error", 2],
    "quotes": ["error", "single"],
    "object-curly-spacing": ["error", "always"],
    "max-len": ["error", { "code": 120 }],
    "max-lines": ["warn", { "max": 150, "skipBlankLines": true, "skipComments": true }],
    "import/no-default-export": "warn",
    "no-negated-in-lhs": 0,
    "no-native-reassign": 0,
    "jsx-a11y/anchor-is-valid": 0,

    "react/jsx-max-props-per-line": [2, { "maximum": { "single": 3, "multi": 1 } }],
    "react/jsx-closing-bracket-location": [2, { "nonEmpty": "tag-aligned", "selfClosing": "line-aligned" }],
    "react/jsx-closing-tag-location": 1,
    "react/jsx-first-prop-new-line": [2, "multiline"],
    "react/jsx-curly-brace-presence": ["error", "never"],
    "react/self-closing-comp": "error",

    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/interface-name-prefix": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-explicit-any": ["warn", { "ignoreRestArgs": false }],

    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
