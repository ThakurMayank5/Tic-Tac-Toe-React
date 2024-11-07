/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-teal': '#006663',
        'custom-dark': '#111111',
      },
    },
  },
  plugins: [],
}