/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0px 4px 141px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
