/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif']
      },
      backgroundColor: {
        'nav': '#323232b3',
        'toggle': '#DEDEDE',
        'primary': '#202020',
        'button': '#9D9D9D'
      },
      colors: {
        'primary': '#DEDEDE',
        'desc': '#959595'
      }
    },
  },
  plugins: [],
}
