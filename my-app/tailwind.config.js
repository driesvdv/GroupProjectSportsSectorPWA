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
      },
      white: {
        DEFAULT: "#F9F9F9",
        light: "#FFFFFF"
      },
      grey: {
        DEFAULT: "#F2F2F2",
      }
    },
    fontSize: {
      'xs': '.875rem',
      'sm': '1rem',
      'base': '1.125rem',
      'lg': '1.25rem',
      'xl': '1.5rem',
      '2xl': '1.75rem',
      '3xl': '2rem'
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 600
    },
    fontFamily: {
      'montserrat': ['Montserrat'],
      'roboto': ['Roboto']
    },
    extend: {
      width: {
        '20rem': '20rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
