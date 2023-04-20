import React from 'react'

import { Theme } from '../src/components/layouts/Theme'

import '../src/styles/Tailwind.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const decoratorsTheme = (Story) => {
  return (
    <Theme isTest>
      <Story />
    </Theme>
  )
}

export const decorators = [decoratorsTheme];