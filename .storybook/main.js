const path = require('path')

module.exports = {
  stories: ["../src/components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-a11y"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  staticDirs: ["../public"],
  webpackFinal: async config => {
    const excludeScssModules = rules => {
      rules.forEach(rule => {
        if (rule.oneOf) excludeScssModules(rule.oneOf)
        if (rule.rules) excludeScssModules(rule.rules)

        const test = rule.test?.toString() || ''
        const handlesScss = test.includes('scss') || test.includes('sass')

        if (!handlesScss) return

        const exclude = /\.module\.s[ac]ss$/

        if (!rule.exclude) {
          rule.exclude = exclude
          return
        }

        rule.exclude = Array.isArray(rule.exclude)
          ? [...rule.exclude, exclude]
          : [rule.exclude, exclude]
      })
    }

    excludeScssModules(config.module.rules)

    config.module.rules.push(
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }],
              ['@babel/preset-react', { runtime: 'automatic' }],
              '@babel/preset-typescript'
            ]
          }
        }
      },
      {
        test: /\.module\.s[ac]ss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              esModule: false,
              importLoaders: 2,
              modules: {
                namedExport: false,
                exportLocalsConvention: "as-is",
                localIdentName: "[name]__[local]--[hash:base64:5]"
              }
            }
          },
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /(?<!\.module)\.s[ac]ss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              esModule: true
            }
          },
          "postcss-loader",
          "sass-loader"
        ]
      }
    )

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
      'next/head': path.resolve(__dirname, './mocks/next-head.js'),
      'next/image': path.resolve(__dirname, './mocks/next-image.js'),
      'next/link': path.resolve(__dirname, './mocks/next-link.js'),
      'next/router': path.resolve(__dirname, './mocks/next-router.js')
    }
    return {
      ...config
    }
  },
  docs: {
    autodocs: true
  }
}
