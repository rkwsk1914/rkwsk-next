import { ThemeContextProvider } from '../src/components/layouts/Theme'
import '../src/styles/Tailwind.css'
import './assets/reset.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  Story => (
    <ThemeContextProvider isTest isDark>
      <Story />
    </ThemeContextProvider>
  ),
]
