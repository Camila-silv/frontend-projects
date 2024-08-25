/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          1: "#000000",
          2: "#212529",
        },
        white: {
          1: "#FFFFFF",
        },
        green: {
          1: "#DAFF01",
        },
        purple: {
          1: "#9353FF",
          2: "#895FB5",
        },
        red: {
          1: "#EE6471",
        },
        orange: {
          1: "#F87F46",
        },
        gray: {
          1: "#CCCCCC",
          2: "#CED4DA",
          3: "#343A40",
          4: "rgba(52, 58, 64, 0.5)",
          5: "#ADB5BD",
          6: "#D8D8D8",
          7: "#6C757D",
          8: "#F8F9FA",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      height: {
        58: "3.625rem",
        38: "2.375rem",
        415: "25.938rem",
        192: "12rem",
        157: "9.813rem",
        615: "38.438rem",
        37: "2.313rem",
        402: "25.125rem",
        82: "5.125rem",
        422: "26.375rem",
        522: "32.625rem",
        148: "9.25rem",
        120: "7.5rem",
        165: "10.313rem"
      },
      maxHeight: {
        425: "26.563rem",
        615: "38.438rem"
      },
      fontSize: {
        28: "1.75rem",
        32: "2rem",
        13: "0.813rem",
      },
      gap: {
        30: "1.875rem",
      },
      width: {
        146: "9.125rem",
        211: "13.188rem",
        160: "10rem",
        323: "20.188rem",
        102: "6.375rem",
        690: "43.125rem",
        1110: "69.375rem",
        319: "19.938rem",
        321: "20.063rem",
        84: "5.25rem",
        441: "27.563rem",
        350: "21.875rem",
        41: "2.563rem",
        109: "6.813rem",
        240: "15rem",
        177: "11.063rem",
        165: "10.313rem"
      },
      maxWidth: {
        729: "45.563rem",
        380: "23.75rem",
        700: "43.75rem",
        450: "28.125rem",
        240: "15rem"
      },
      minWidth: {
        380: "23.75rem",
      },
      lineHeight: {
        33: "33.89px",
      },
      screens: {
        md: "847px",
        lg: "1440px",
      },
      keyframes: {
        loading: {
          '0%': { width: '0px' },
          '50%': { width: '50%' },
          "100%": { width: '100%' }
        }
      },
      animation: {
        'loading': 'loading 2s linear infinite',
      },
      padding: {
        165: "10.313rem"
      }
    },
  },
  plugins: [],
};
