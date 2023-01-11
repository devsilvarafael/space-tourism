/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': "375px",
      'md': "768px",
      'lg': "1440px",
    },
    colors: {
      'dark': '#0B0D17',
      'light-blue': '#D0D6F9',
      'white': '#FFFFFF'
    }
  },
  plugins: [],
}