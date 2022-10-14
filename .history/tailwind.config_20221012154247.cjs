/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '.src/**/*.tsx',
  ],
  theme: {
    fontSize: {

    },

    extend: {
      colors:{
        'gray-900': '#121214',
        'gray-800': '#202024',
        'gray-400': '#7C7C8A',
        'gray-200': '#C4C4CC',
        'gray-100': '#e1e1e6',
        
        'cyan-500': '#81D8F67',
        'cyan-300': '#9BE1FB',

        'black': '000000',
      },
      fontFamily: {
        sans:'inter, sans-serif',
      }
    },
  },
  plugins: [],
}
