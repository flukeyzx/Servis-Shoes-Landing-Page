/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#ECEEFF",
      "coral-red": "#FF6452",
      red: "#db2525",
      "slate-gray": "#6D6D6D",
      "pale-blue": "#F5F6FF",
      "white-400": "rgba(255, 255, 255, 0.80)",
      white: "#fff",
      black: "#000",
    },

    boxShadow: {
      "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
    },
    extend: {},
  },
  plugins: [],
};
