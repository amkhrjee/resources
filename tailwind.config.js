/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  daisyui: {
    themes: ["light", "dark"],
  },
  theme: {
    extend: {
      fontFamily: {
        serif: ["Spectral", "system-ui"],
        sans: ["Inter Tight"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
