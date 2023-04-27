import React from 'react'

import * as NextImage from "next/image";

import { Theme } from '../src/components/layouts/Theme'

import '../src/styles/Tailwind.css';

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
    <Theme isTest>
      <Story />
    </Theme>
  )
}

export const decorators = [decoratorsTheme];