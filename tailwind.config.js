/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'secondary': {
          100: "#979899",
          200: "#a4a5a6",
          600: "#3f4040",
          700: "#2d2e2e",
          800: "#2b2c2c",
          900: "#292a2a",
        },
        'primary': "#e0a80d"
      },
    },
  },
  plugins: [],
}

