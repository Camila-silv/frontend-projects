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
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        calistoga: ["Calistoga", "serif"],
      },
      backgroundImage: {
        modal: "linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .6))",
        card: "linear-gradient(180deg,rgba(43, 43, 43, 1) 40%, rgba(31, 31, 31, 1) 40%)",
      },
    },
    screens: {
      mobile: "400px",
      // => @media (min-width: 400px) { ... }
      laptop: "992px",
      // => @media (min-width: 992px) { ... }
      desktop: "1200px",
      // => @media (min-width: 1200px) { ... }
    },
  },
  plugins: [],
};
