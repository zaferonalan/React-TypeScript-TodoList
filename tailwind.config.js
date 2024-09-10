/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        "custom-darkGray" : "#1E201E",
        "custom-darkBlack" : "#000000"
      }
    },
  },
  plugins: [],
}