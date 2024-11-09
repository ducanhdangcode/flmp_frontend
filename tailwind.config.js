const { PiX } = require('react-icons/pi');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

    }, fontFamily: {
      'roboto': ['Roboto Condensed'],
      'titillium': ['Titillium Web'],
      'ubuntu': ['Ubuntu'],
      'changa': ['Changa'],
      'lilita-one': ['Lilita One'],
      'agdasima': ['Agdasima']
    }, boxShadow: {
      'blue-shadow': '0 0.5em 0.5em -0.4em blue',
      'yellow-shadow': '0 0.5em 0.5em -0.4em yellow', 
      'red-shadow': '0 0.5em 0.5em -0.4em red',
      'green-shadow': '0 0.5em 0.5em -0.4em green',
      'gray-shadow': '0.4rem 0.4rem #918d8c',
      'dark-shadow': '0.4rem 0.4rem #747ab8',
      'ease-blue-shadow': '0.2rem 0.2rem 0.5rem #10a1c9',
    }, fontSize: {
      'xs': '.75rem',
       'sm': '.875rem',
       'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
       '3xl': '1.875rem',
       '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
       '7xl': '5rem',
    }
  },
  plugins: [],
}

