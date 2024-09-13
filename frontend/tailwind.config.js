/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "darkbrown": "#4D2D18",
        "beige" : "#CABA9C",
        "green" : "#4C6444",
        
      }
    },
  },
  plugins: [require('daisyui')],
}

