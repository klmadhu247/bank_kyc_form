/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: "#ff1717",
        secondary: "#d32b2b",
        dark: "#212b35",
        grey: "#f4f5f7"
      },
    },
  },
  plugins: [],
}

