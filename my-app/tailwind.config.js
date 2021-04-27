module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: {
        DEFAULT: '#114B5F',
        dark: '#25282B',
      },
      green: {
        DEFAULT: '#1A936F',
        dark: '#009eeb',
      },
      gray: {
        DEFAULT: '#C4C4C4',
        dark: '#7B7B7B'
      },
      red: {
        DEFAULT: '#CF6766'
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
