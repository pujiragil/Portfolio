/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      borderColor: {
        'profile': '#FDD64E'
      },
      colors: {
        'title': '#F1F2F4',
        'subtitle': '#A3ABB2',
        'fact': '#C3C7CB',
        'button': '#3D3D3D'
      },
      backgroundColor: {
        'dark': '#0C151D',
        'button': '#FFE071',
        'buttonhov': '#ffe482',
        'button2': '#171F26',
        'button2hov': '#1b232a',
        'button3': '#0C151D',
      }
    },
  },
  plugins: [],
}
