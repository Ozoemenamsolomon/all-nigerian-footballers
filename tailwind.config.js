const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      '9jaGreen': '#008753',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme, addVariant }) {
      addBase({
        h1: { fontSize: theme('fontSize.4xl') },
        h2: { fontSize: theme('fontSize.xl') },
        h3: { fontSize: theme('fontSize.lg') },
        h4: { fontSize: theme('fontSize.base') },
        h5: { fontSize: theme('fontSize.sm') },
      });
      addVariant('hocus', ['&:hover', '&:focus']);
      addVariant('hofowi', ['&:hover', '&:focus-within']);
    }),
  ],
};
