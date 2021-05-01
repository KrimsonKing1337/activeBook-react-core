const webpackDefault = require('../webpack.config.js');

module.exports = {
  stories: ['../src/**/*.stories.@(tsx|mdx)'],
  addons: ['@storybook/addon-essentials'],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config, { configType }) => {
    const configDefault = webpackDefault(config, configType);
    const { module, resolve } = configDefault;
    const { rules } = module;
    const { modules } = resolve;
    const rulesForStorybook = [];

    // версия webpack, который используется в storybook не поддерживает свойство fullySpecified
    rules.forEach((ruleCur) => {
      if (ruleCur.resolve && ruleCur.resolve.fullySpecified !== undefined) {
        return;
      }

      rulesForStorybook.push(ruleCur);
    });

    config.module.rules = rulesForStorybook;
    config.resolve.modules = modules;

    return config;
  },
};
