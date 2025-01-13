/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: { 
    extend: { 
      screens:{
        '2md':'960px'
      },
      colors:{
       mainText:'#343F52',
      secondaryText:'#60697B' 

    }},
  },
  plugins: [],
}