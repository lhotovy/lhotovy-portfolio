/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
      "light-bg": "url('../src/images/lightBg.jpg')",
      "dark-bg": "url('../src/images/darkBg.jpg')"
      }),
    },
  },
  container: {
    center: true,
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
  plugins: []
  
}
