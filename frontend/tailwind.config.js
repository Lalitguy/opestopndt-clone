/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        btnBlue: '#07a8ed',
      },
    },
    fontFamily:{
      'mont': ['Montserrat', 'monospace']
    }
  },
  plugins: [],
}

