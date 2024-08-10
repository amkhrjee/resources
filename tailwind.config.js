/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  daisyui: {
    themes: ["dracula"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
