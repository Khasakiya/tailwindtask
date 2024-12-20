/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors:{
      'primary':"#3238f2",
      'dhruv':"#9C27B0"
      },
      fontFamily:{
        'display': ['Poppins','sans-serif'],
        'body': ['Inter','sans-serif']
      }
    },
  },
  plugins: [],
}

