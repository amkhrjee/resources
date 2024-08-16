/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Varela Round", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: ["sunset"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
