/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#f44336",
        grey: "#d3d3d3",
      },
    },
  },
  plugins: [],
};
