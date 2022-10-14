/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '.src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs : 14,
      sm : 16,
      md : 18,
      lg : 20,
      xl : 24,
      '2xl' :32,
    },

    extend: {
      colors:{
        'gray-900': '#121214',
        'gray-800': '#202024',
        'gray-400': '#7C7C8A',
        'gray-200': '#C4C4CC',
        'gray-100': '#E1E1E6',
        
        'cyan-500': '#81D8F67',
        'cyan-300': '#9BE1FB',

        black: '000',
        white: 'FFF',
      },
      fontFamily: {
        sans:'inter, sans-serif',
      }
    },
  },
  plugins: [],
}