/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '.src/**/*.tsx',
  ],
  theme: {
   
    extend: {
      fontFamily: {
        sans:'inter, sans-serif',
      },
      
      colors:{
        gray: {
          900: '#121214',
          800: '#202024',
          400: '#7c7c8a',
          200: '#c4c4cc',
          100: '#e1e1e6',
        },
        cyan:{
          500: '#81d8f7',
          300 : '#9BE1FB',
        },
    

        black: '000',
        white: 'FFF',
      },
  
    },
  },
  plugins: [],
}
