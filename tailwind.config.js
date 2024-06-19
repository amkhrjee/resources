/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Spectral", "system-ui"],
      },
    },
  },
  plugins: [require("daisyui")],
};
