/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '.src/**/*.tsx',
  ],
  theme: {
    extend: {
      colors:{
        'gray-900': '#121214',
        'gray-800': '#202024',
        'gray-400': '#7C7C8A',
        'gray-200': '#C4C4CC',
        'gray-100': '#121214',
        'gray-900': '#121214',
      },
      fontFamily: {
        sans:'inter, sans-serif',
      }
    },
  },
  plugins: [],
}
