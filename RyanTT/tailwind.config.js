const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["**/*.{html,razor,razor.cs}"],
  theme: {
    extend: {
      fontFamily: {
          sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  plugins: [],
}
