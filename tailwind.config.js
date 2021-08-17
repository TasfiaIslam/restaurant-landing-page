module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: '#2B3A41',
        light: '#567482',
        pink: '#ECBB9C',
      },
      fontFamily: {
        'baskerville': ['"Baskerville"', 'serif'],
        'dmsans': ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
