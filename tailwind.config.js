/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#2f3369",
        brown: "#5c4e4e",
        teal: "#0097a7",
        coral: "#ff9e7a",
        dgray: "#747474",
        beige: "#e3dddc",
      },
      animation: {
        cursor: "blink 1s linear infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": {opacity:1},
          "50%": {opacity:0},
        },
      },
    },
  },
  plugins: [],
};
