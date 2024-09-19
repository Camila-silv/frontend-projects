/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montSerrat: ["Montserrat", "sans-serif"],
        elsie: ["Elsie Swash Caps", "serif"],
      },
      fontSize: {
        22: "1.375rem",
        82: "5.125rem",
        42: "2.625rem",
        32: "2rem"
      },
      colors: {
        gray: {
          1: "#202020",
          2: "#e0e0e0",
          
   
        },
        yellow: {
          1: "#FFCB47",
        },
        white: {
          1: "#FFFFFF",
          2: "#f7f7f7",
        },
        black: {
          1: "#000000",
          2: "rgba(0, 0, 0, 0.4)"
        }
      },
      lineHeight: {
        26: "1.625rem",
        94: "5.875rem",
        65: "4.063rem"
      },
      maxWidth: {
        787: "49.188rem",
        1200: "75rem",
        194: "12.125rem",
        995: "62.188rem",
        379: "23.688rem",
        510: "31.875rem",
        530: "33.125rem"
      },
      minWidth: {
        636: "39.75rem",
        194: "12.125rem",
        594: "37.125rem"
      },
      width: {
        1645: "102.813rem",
        768: "48rem",
        52: "3.25rem",
        182: "11.375rem",
        160: "10rem"
      },
      height: {
        75: "4.688rem",
        650: "40.625rem",
        440: "27.5rem",
        52: "3.25rem",
        200: "12.5rem",
        32: "2rem",
        554: "34.625rem"
      },
      boxShadow: {
        1: "10px 10px 30px 0 rgba(0, 0, 0, 0.1)",
        2: "10px 10px 30px 0 rgba(255, 203, 71, 0.3)",
      },
      backgroundImage: {
        lines: "url('./src/assets/Linhas.png')",
        main: "url('./src/assets/Linhas.png')",
        vector: "url('./src/assets/Vector.svg')",
        plant: "url('./src/assets/imagem-hero 1.png')"
      },
      backgroundPosition: {
        "left": "-150px -40px "
      },
      screens: {
        md: {'max': '890px'},
        "md-second": {'max': '910px'},
        small: {'max': '580px'} ,
        "small-second": {'max': '448px'},
        larger:{'max': '1040px'} 
      }
    },
  },
  plugins: [],
};
