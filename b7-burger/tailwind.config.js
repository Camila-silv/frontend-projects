/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "orange-normal": "#FE6A0F",

        "black-normal": "#2b2b2b",
        "black-light": "#1F1F1F",
        "black-dark": "#141414",
      },
    },
  },
  plugins: [],
};
