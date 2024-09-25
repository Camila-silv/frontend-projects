/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik Glitch", "system-ui"],
        archivo: ["Archivo", "sans-serif"],
        "archivo-black": ["Archivo Black", "sans-serif"],
        libre: ["Libre Baskerville", "serif"],
      },
      colors: {
        "red-normal": "#CF0F0F",
        "red-dark": "#FF0000",

        "gray-normal": "#B5BBBF",
      },
      borderWidth: {
        3: "3px",
      },
      height: {
        54: "3.375rem",
        970: "60.625rem",
        707: "44.188rem",
        276: "17.25rem",
        47: "2.938rem",
        120: "7.5rem",
        41: "2.563rem",
        218: "13.625rem",
        278: "17.375rem",
        400: "25rem",
      },
      maxWidth: {
        284: "17.75rem",
        578: "36.125rem",
        1200: "75rem"
      },
      width: {
        903: "56.438rem",
        276: "17.25rem",
        200: "12.5rem",
        420: "26.25rem",
        1536: "96rem",
      },
      backgroundImage: {
        "hero-pattern": "url('./public/banner/florest.webp')",

        "lamps-light-theme": "url('./public/backgrounds/lamps.png')",
        "lamps-dark-theme": "url('./public/backgrounds/lamps-inverted.png')",

        "tape-dark-theme": "url('./public/footer/tape-dark-theme.png')",
        "tape-light-theme": "url('./public/footer/tape.svg')",

        "florest-dark-theme":
          "linear-gradient(to bottom,rgba(5, 0, 0, 1),rgba(19, 4, 4, 1) ,  rgba(19, 1, 1, 0.73)), url('./public/backgrounds/florest.png')",
        "florest-light-theme":
          "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1) ,  rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.75)), url('./public/backgrounds/florest.png')",

        "monster-dark-theme":
          "url('./public/characters/inverted-world-monster-dark-theme.png') ",
        "monster-light-theme":
          "url('./public/characters/inverted-world-monster-light-theme.png') ",

        "kids-light-theme":
          "url('./public/characters/kids-on-the-bike-light-theme.svg') ",
        "kids-dark-theme":
          "url('./public/characters/kids-on-the-bike-light-theme.svg') ",
      },
      boxShadow: {
        default: "30px 30px 0px 0px rgb(0, 0, 0)",
      },
    },
  },
  plugins: [],
};
