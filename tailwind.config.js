/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0079ff",
        darkPrimary: "#1e40af",
      },
      boxShadow: {
        neumorphic: "10px 10px 20px #d1d9e6, -10px -10px 20px #ffffff",
        neumorphicDark: "10px 10px 20px #111827, -10px -10px 20px #374151",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
