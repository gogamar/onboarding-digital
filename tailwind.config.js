/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-teal": "#4DA2A9",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
