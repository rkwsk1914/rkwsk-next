import React from 'react'

import * as NextImage from "next/image";

import { ThemeContextProvider } from '../src/stores/ThemeContext'

import '../src/styles/Tailwind.css';
import './assets/reset.css';

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: props => <img {...props} />
});

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
    <ThemeContextProvider isTest isDark>
      <Story />
    </ThemeContextProvider>
  )
}

export const decorators = [decoratorsTheme];