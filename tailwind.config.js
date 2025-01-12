/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
   fontFamily:{
     Inter:["Inter", 'serif']
    },
    extend: { 
      screens:{
        '2md':'960px'
      },
      colors:{
      primary:'#7E3AF2',
      mainText:'#111928',
      secondaryText:'#6B7280',

    }},
  },
  plugins: [],
}