/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '.src/**/*.tsx',
  ],
  theme: {
    extend: {
      colors:{
        'gray-900': '#121214'
      },
      fontFamily: {
        sans:'inter, sans-serif',
      }
    },
  },
  plugins: [],
}
