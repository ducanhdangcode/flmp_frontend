const { PiX } = require('react-icons/pi');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greenFootball: "#1F7D53", 
        easeGreen: "#CAE0BC", 
        easeWhite: "#FAF1E6", 
        hardGreen: "#27391C", 
        easeYellow: "#F8ED8C", 
        moreEaseYellow: "#edebca", 
        mediumGreen: "#16C47F"
      }
    }, fontFamily: {
      'roboto': ['Roboto Condensed'],
      'titillium': ['Titillium Web'],
      'ubuntu': ['Ubuntu'],
      'changa': ['Changa'],
      'lilita-one': ['Lilita One'],
      'agdasima': ['Agdasima'], 
      'space-grotesk': ['Space Grotesk'], 
      'noticia-text': ['Noticia Text'],
      'alfa': ['Alfa Slab One'], 
      'code': ['Source Code Pro'], 
      'teko': ['Teko']
    }, boxShadow: {
      'blue-shadow': '0 0.5em 0.5em -0.4em blue',
      'yellow-shadow': '0 0.5em 0.5em -0.4em yellow', 
      'red-shadow': '0 0.5em 0.5em -0.4em red',
      'green-shadow': '0 0.5em 0.5em -0.4em green',
      'gray-shadow': '0.4rem 0.4rem 0.5rem #918d8c',
      'dark-shadow': '0.4rem 0.4rem 0.3rem #747ab8',
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
    }, 
    backgroundImage: {
      loginBackground: 'url("https://images.unsplash.com/photo-1430232324554-8f4aebd06683?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vdGJhbGwlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D")'
    }
  },
  plugins: [],
}

