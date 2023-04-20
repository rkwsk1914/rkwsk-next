const defaultTheme = require('tailwindcss/defaultTheme')

const { colors } = require("./tailwind/colors.js")
const { spaceSizes } = require("./tailwind/sizes.js")

module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'Hiragino Kaku Gothic ProN', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      extend: {
        spacing: spaceSizes,
        colors: Object.assign(colors),
        screens: {
          small: "750px",
          medium: "960px",
          large: "1200px",
          xLarge: "1600px",
        },
      },
    },
  },
  plugins: [],
}