/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        NotoSansSymbol: ["Noto Sans Symbols 2", "sans-serif"],
      },
      colors: {
        custom_dark_gray: "#424242",
        custom_light_gray: "#555555",
        custom_pink: "#F65261",
        custom_black: "#232323",
      },
    },
  },
  plugins: [],
};
