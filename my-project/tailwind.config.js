/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(73,68,62)",
      },
    },
    container: {
      padding: {
        md: "10rem"
      },
    },
  },
  plugins: [],
}