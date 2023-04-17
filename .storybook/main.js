const path = require('path');

module.exports = {
  stories: ["../src/components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-actions",
    "@storybook/addon-docs"
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {}
  },
  core: {
    builder: "@storybook/builder-webpack5"
  },
  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src')
    };
    return {
      ...config
    };
  },
  docs: {
    autodocs: true
  }
};
