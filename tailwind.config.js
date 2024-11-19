module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      'sen': ['Sen', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'tambouille': '#3E3B35',
      'tambouille-secondary':  {
        '50': '#FFCA13',
        '100': '#FFF7D9',
      },
      'tambouille-red': '#FD5841',
      'tambouille-blue': '#1E78FF',
      'tambouille-green': '#03FF49',
      'tambouille-cherry': '#FF6666',
      'autumn': '#FFEED9',
      'winter': '#D9EDFF',
      'summer': '#FFF7D9',
      'spring': '#FFECF8',
      'tambouille-gray': {
        '50': '#F4F6F7',
        '100': '#A0A7B2',
      }

    },
    extend: {},
  },
  plugins: [],
}