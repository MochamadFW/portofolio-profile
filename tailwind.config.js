const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        retro: ['"Press Start 2P"', ...fontFamily.sans],
      },
      colors: {
        'retro-pink': '#ff00ff', // Use quotes for hyphenated keys
        'retro-blue': '#00ffff',
        'retro-green': '#00ff00',
        'retro-yellow': '#ffff00',
      },
    },
  },
  plugins: [],
};