/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
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
        'title': '#3D3D3D',
        'dtitle': '#F1F2F4',
        'subtitle': '#575757',
        'dsubtitle': '#A3ABB2',
        'fact': '#3A3A3A',
        'dfact': '#C3C7CB',
        'button': '#3D3D3D',
        'light': '#FDD64E',
        'button2': '#19191B'
      },
      backgroundColor: {
        'light': '#E9EBEC',
        'dark': '#0C151D',
        'button': '#FBD144',
        'dbutton': '#FFE071',
        'buttonhov': '#FFE998',
        'button2': '#171F26',
        'button2hov': '#21272c',
        'button3': '#D7D7D7',
        'dbutton3': '#0C151D'
      },
      dropShadow: {
        'yellow': '0 0 25px rgb(252, 215, 79)'
      }
    },
  },
  plugins: [],
}
