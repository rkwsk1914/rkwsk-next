const path = require('path');
module.exports = {
  "stories": ["../src/components/**/*.stories.mdx", "../src/components/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-actions", "@storybook/addon-mdx-gfm"],
  "framework": {
    name: "@storybook/nextjs",
    options: {}
  },
  webpackFinal: async config => {
    // scss を読み込む
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          // 1 => postcss-loader
          modules: {
            localIdentName: '[local]___[hash:base64:2]'
          }
        }
      }, 'sass-loader']
    });
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