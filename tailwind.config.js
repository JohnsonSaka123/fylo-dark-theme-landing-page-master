/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "Raleway" : ["Raleway", "serif"]
      },
      colors : {
        "backgroundflyo" : "hsl(218, 28%, 13%)" ,
        "underlineColor" : "hsl(176, 68%, 64%)"
      }
    },
  },
  plugins: [],
}

