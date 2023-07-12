import { ThemeContextProvider } from '../src/components/layouts/Theme'
import '../src/styles/Tailwind.css';
import './assets/reset.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  image: {
    name: 'Image',
    description: 'Global image component',
    defaultValue: 'Custom',
    toolbar: {
      items: ['Custom', 'Next'],
      showName: true,
    },
  },
};

export const decorators = [
  (Story, context) => {
    const { image } = context.globals;
    if (image === 'Custom') {
      return (
        <ThemeContextProvider isTest isDark>
          <Story />
        </ThemeContextProvider>
      );
    } else {
      return (
        <NextImageContext.Provider value={NextImage}>
          <Story />
        </NextImageContext.Provider>
      );
    }
  },
];
