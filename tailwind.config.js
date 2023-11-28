/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'logo': ['Alex Brush'],
        'poppins': ['Poppins']
      },
      colors: {
        // transparent: 'transparent',
        // current: 'currentColor',
        'hotpink': '#FF92A2',
        'lightpink': '#FFE2E2',
        'white': '#F6F6F6',
        'darkblue': '#8785A2'
      },
      dropShadow: {
        'normal': '3px 6px 18px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}

