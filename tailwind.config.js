/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      'xl': {
        'max': '1440px'
      },
      'lg': {
        'max': '1024px'
      },
      'md': {
        'max': '768px'
      },
      'sm': {
        'max': '600px'
      },
      'xs': {
        'max': '480px'
      },
    },
    container: {
      padding: '15px',
      center: true
    },
    extend: {
      colors: {
        current: 'currentColor',
        'darkBg': '#5C6168',
        'white': '#ffffff',
        'accent': '#E1B168',
        'accentHover': '#F1A633',
        'black': '#292E36',
        'lightBlack': '#555555',
        'gray': '#343942',
      },
      fontFamily: {
        'title': ['"Cormorant Infant"'],
        'body': ['"Josefin Sans"'],
      },
    },
  },
  plugins: [],
}