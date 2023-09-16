const configOrder = require('./config/styles/config-order/configCreator.js')();

module.exports = {
  extends: ['stylelint-config-standard-scss'],
  plugins: [
    'stylelint-scss',
    'stylelint-order',
    'stylelint-declaration-block-no-ignored-properties',
  ],
  rules: {
    'selector-pseudo-class-no-unknown': [
      true,
      {
        'ignorePseudoClasses': ['global']
      }
    ],
    'value-keyword-case': [
      'lower',
      {
        'camelCaseSvgKeywords': true
      }
    ],

    'scss/dollar-variable-pattern': null,
    'scss/double-slash-comment-whitespace-inside': null,
    'scss/double-slash-comment-empty-line-before': null,
    'scss/at-import-no-partial-leading-underscore': null,
    'scss/at-rule-no-unknown': true,

    'at-rule-empty-line-before': null,
    'at-rule-no-unknown': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'keyframes-name-pattern': null,
    'selector-class-pattern': null,
    'no-descending-specificity': null,
    'declaration-empty-line-before': null,
    'selector-pseudo-element-colon-notation': 'single',
    'plugin/declaration-block-no-ignored-properties': true,

    'order/order': [
      'custom-properties',
      'dollar-variables',
      'declarations',
      'rules',
      'at-rules'
    ],
    'order/properties-order': configOrder,
  },
};
