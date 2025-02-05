/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        corinthia: ['Corinthia', 'serif'], // Add Google Fonts
        // custom: ['CustomFont', 'sans-serif'], // Add local font
      },
    },
  },
  plugins: [],
}

