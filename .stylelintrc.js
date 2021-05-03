const configOrder = require('./src/styles/config-order/configCreator.js')();

module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: [
    'stylelint-scss',
    'stylelint-order',
    'stylelint-declaration-block-no-ignored-properties',
  ],
  rules: {
    'declaration-empty-line-before': null,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
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
