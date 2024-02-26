/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#333333",
        base_red: "#e3000f",
        black_punch: "#191919",
        highlight: "#4d4d4d",
      },
      boxShadow: {
        neo: "-5px -5px 11px -1px rgb(255,255,255, 10%), 5px 5px 11px 1px rgb(0,0,0, 16%)",
      },
    },
  },
  plugins: [],
};
