const color = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {

      black: color.black,
      white: color.white,
      gray: color.gray,
      
      primary: {
        '100': '#f1f8f6',
        '200': '#d4e9e2',
        '300': '#008248',
        '400': '#1e3932'
      },
      
      secondary: {
        100: '#f3f1e7',
        200: "#ffcc00",
      },
      
    },

    fontFamily:{
      sans:"'Helvetica Neue',Helvetica,Arial,sans-serif",
    },

    extend: {
      backgroundImage: theme => ({
        'mobile-hero': "url('./Img/mobile_Hero.webp')",
        'desktop-hero': "url('./Img/desktop_Hero.webp')",
      }),
      borderWidth: {
        '2.5': '2.5px',
      },
      backgroundPosition: {
        'right-40':'40% 0%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
