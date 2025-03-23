const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        retro: ['var(--font-press-start-2p)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};